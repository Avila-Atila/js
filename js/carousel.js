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
    teste.forEach((element) => {
      element.style.display = "none";
    });
    teste2.forEach((element) => {
      element.style.display = "none";
    });
    teste[this._sequence].style.display = "block";
    teste2[this._sequence].style.display = "block";
    this._sequence++;
  }
}
