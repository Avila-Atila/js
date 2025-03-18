//carousel

//Array storage class
export let carouselArr = [];

//class Carousel
export class Carousel {
  constructor(img, title, url) {
    this.img = img;
    this.title = title;
    this.url = url;
  }
  static Start(arr) {
    this.teste = document.querySelectorAll("main div img");
    this.teste2 = document.querySelectorAll("main div a");
    this.teste3 = document.querySelectorAll("main div span");
    this.teste3.forEach((element, i) => {
      element.addEventListener("click", () => {
        this.control(i);
      });
    });
    document
      .getElementById("carousel__anterior")
      .addEventListener("click", () => {});
    document
      .getElementById("carousel__proximo")
      .addEventListener("click", () => {
        clearInterval(this._interval);
        console.log(this._sequence);
        Carousel.Next();
        console.log(this._sequence);
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 2000);
        console.log("object");
      });
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 2000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    console.log(this._sequence);
    if (this._sequence >= this._size || this._sequence < 0) {
      this._sequence = 0;
    }

    [...this.teste, ...this.teste2].forEach((element, i) => {
      element.style.display = "none";
      if (this.teste3[i]) {
        this.teste3[i].classList.remove("carousel__nav__botao__selecionado");
      }
    });
    [this.teste[this._sequence], this.teste2[this._sequence]].forEach(
      (element) => {
        element.style.display = "block";
        if (this.teste3[this._sequence]) {
          this.teste3[this._sequence].classList.add(
            "carousel__nav__botao__selecionado"
          );
        }
      }
    );

    this._sequence++;
    console.log(this._sequence);
  }

  static control(param) {
    [...this.teste, ...this.teste2].forEach((element, i) => {
      element.style.display = "none";
      if (this.teste3[i]) {
        this.teste3[i].classList.remove("carousel__nav__botao__selecionado");
      }
    });

    [this.teste[param], this.teste2[param]].forEach((element) => {
      element.style.display = "block";
      if (this.teste3[param]) {
        this.teste3[param].classList.add("carousel__nav__botao__selecionado");
      }
    });
    this._sequence = param;
  }
}
