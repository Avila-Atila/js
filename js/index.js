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

carouselArr.forEach((element) => {
  let link = document.createElement("a");
  let imagem = document.createElement("img");
  let span = document.createElement("span");
  if (element.url != "lancamento.html") {
    link.setAttribute("href", element.url);
    link.setAttribute("target", "_blank");
  } else {
    link.setAttribute("href", element.url);
  }

  link.innerText = element.title;
  imagem.setAttribute("src", element.img);
  imagem.classList.add("imagem");
  span.classList.add("carousel__nav__botao");
  document
    .getElementById("carousel")
    .insertAdjacentElement("beforeEnd", imagem);
  document
    .getElementById("carousel-title")
    .insertAdjacentElement("beforeEnd", link);
  document
    .getElementById("carousel__nav")
    .insertAdjacentElement("afterBegin", span);
});

Carousel.Start(carouselArr);
