//carousel

//Array storage class
export let carouselArr = [];

//class Carousel
export class Carousel {
  static _primeiraRodada = false;
  constructor(img, title, url) {
    this.img = img;
    this.title = title;
    this.url = url;
  }
  static Start(arr) {
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
    if (this._sequence >= this._size) {
      this._sequence = 0;
    }
    let teste = document.querySelectorAll("main div img");
    let teste2 = document.querySelectorAll("main div a");
    let teste3 = document.querySelectorAll("main div span");
    if (!this._primeiraRodada) {
      teste3.forEach((element, i) => {
        element.addEventListener("click", () => {
          this.control(i);
        });
      });

      this._primeiraRodada = true;
    }

    [...teste, ...teste2].forEach((element, i) => {
      element.style.display = "none";
      if (teste3[i]) {
        teste3[i].classList.remove("carousel__nav__botao__selecionado");
      }
    });
    [teste[this._sequence], teste2[this._sequence]].forEach((element) => {
      element.style.display = "block";
      if (teste3[this._sequence]) {
        teste3[this._sequence].classList.add(
          "carousel__nav__botao__selecionado"
        );
      }
    });

    this._sequence++;
  }

  static control(param) {
    // console.log(param, "antes de mudar");
    if (param > this._size - 1 || param < 0) {
      param = 0;
    }
    // console.log(param, "dps de mudar");
    let teste = document.querySelectorAll("main div img");
    let teste2 = document.querySelectorAll("main div a");
    let teste3 = document.querySelectorAll("main div span");

    [...teste, ...teste2].forEach((element, i) => {
      element.style.display = "none";
      if (teste3[i]) {
        teste3[i].classList.remove("carousel__nav__botao__selecionado");
      }
    });

    [teste[param], teste2[param]].forEach((element) => {
      element.style.display = "block";
      if (teste3[param]) {
        teste3[param].classList.add("carousel__nav__botao__selecionado");
      }
    });
    this._sequence = param;
  }
}
