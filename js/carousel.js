export let carouselArr = [];

export class Carousel {
  constructor(img, title, url) {
    this.img = img;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    this.teste = document.querySelectorAll("#carousel img");
    this.teste2 = document.querySelectorAll("#carousel-title a");
    this.teste3 = document.querySelectorAll("#carousel__nav span");

    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = -1;
        Carousel._size = arr.length;
        this.teste3.forEach((elemento, i) => {
          elemento.addEventListener("click", () => {
            clearInterval(this._interval);
            this.Next(i);
            // console.log(i);
            // console.log(this._sequence);
          });
        });
        document
          .getElementById("carousel__anterior")
          .addEventListener("click", () => {
            clearInterval(this._interval);
            this.Next("anterior");
            // console.log(i);
            // console.log(this._sequence);
          });
        document
          .getElementById("carousel__proximo")
          .addEventListener("click", () => {
            clearInterval(this._interval);
            this.Next("proximo");
          });
        Carousel._interval = setInterval(() => Carousel.Next(), 2000);
        Carousel.Next("proximo");
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next(param) {
    if (param === "proximo") {
      this._sequence = (this._sequence + 1) % this._size;
    } else if (param === "anterior") {
      this._sequence = (this._sequence - 1 + this._size) % this._size;
    } else if (typeof param === "number") {
      this._sequence = param;
    }

    this.teste.forEach((img, i) => {
      img.style.display = i === this._sequence ? "block" : "none";
    });

    this.teste2.forEach((title, i) => {
      title.style.display = i === this._sequence ? "block" : "none";
    });

    this.teste3.forEach((elemento, i) => {
      if (i === this._sequence) {
        elemento.classList.add("carousel__nav__botao__selecionado");
      } else {
        elemento.classList.remove("carousel__nav__botao__selecionado");
      }
    });

    clearInterval(this._interval);
    this._interval = setInterval(() => this.Next("proximo"), 2000);
  }
}
