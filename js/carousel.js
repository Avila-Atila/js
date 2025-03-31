export let carouselArr = [];

export class Carousel {
  constructor(img, title, url) {
    this.img = img;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    this.imagens = document.querySelectorAll("#carousel img");
    this.links = document.querySelectorAll("#carousel-title a");
    this.botoesNav = document.querySelectorAll("#carousel__nav span");

    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = -1;
        Carousel._size = arr.length;
        this.botoesNav.forEach((elemento, i) => {
          elemento.addEventListener("click", () => {
            clearInterval(this._interval);
            this.Next(i);
          });
        });
        document
          .getElementById("carousel__anterior")
          .addEventListener("click", () => {
            clearInterval(this._interval);
            this.Next("anterior");
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

    this.imagens.forEach((img, i) => {
      img.style.display = i === this._sequence ? "block" : "none";
    });

    this.links.forEach((title, i) => {
      title.style.display = i === this._sequence ? "block" : "none";
    });

    this.botoesNav.forEach((elemento, i) => {
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
