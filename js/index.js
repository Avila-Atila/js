import { Carousel } from "./carousel.js";
import { carouselArr } from "./carousel.js";

//insert each image on carousel
carouselArr.push(
  new Carousel(
    "img/imagem_1.jpg",
    "Esta é a nova Ranger Ford 2022. Verifique novidades.",
    "lancamento.html"
  )
);
carouselArr.push(
  new Carousel(
    "img/imagem_2.jpg",
    "Ford a nossa história",
    "https://www.ford.pt/experiencia-ford/ford-blog/o-nosso-legado"
  )
);
carouselArr.push(
  new Carousel(
    "img/imagem_3.jpg",
    "Nova Ford Bronco Sport 2022",
    "lancamento.html"
  )
);

const container = document.getElementById("carousel");
const container2 = document.getElementById("carousel-title");
const container3 = document.getElementById("carousel__nav");
carouselArr.forEach((element) => {
  let link = document.createElement("a");
  let imagem = document.createElement("img");
  let span = document.createElement("span");
  link.setAttribute("href", element.url);
  link.innerText = element.title;
  imagem.setAttribute("src", element.img);
  imagem.classList.add("imagem");
  span.classList.add("carousel__nav__botao");
  container.insertAdjacentElement("beforeEnd", imagem);
  container2.insertAdjacentElement("beforeEnd", link);
  container3.insertAdjacentElement("afterBegin", span);
});

Carousel.Start(carouselArr);

// carArr.push(
//   new Car(
//     "nome",
//     "preco",
//     "alturaCacamba",
//     "alturaVeiculo",
//     "alturaSolo",
//     "capacidadeCarga",
//     "motor",
//     "potencia",
//     "volumeCacamba",
//     "roda",
//     "image"
//   )
// );

// carArr.push(
//   new Car(
//     "nome2",
//     "prec2o",
//     "altu2raCacamba",
//     "altu2raVeiculo",
//     "altu2raSolo",
//     "capa2cidadeCarga",
//     "moto2r",
//     "pote2ncia",
//     "volu2meCacamba",
//     "roda2",
//     "image2"
//   )
// );
