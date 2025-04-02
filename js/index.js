import { Carousel } from "./carousel.js";
import { carouselArr } from "./carousel.js";

const headerLinks = document.querySelectorAll("header nav li");

headerLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    headerLinks[0].firstElementChild.classList.remove("headerLink");
    link.firstElementChild.classList.add("headerLink");
  });
  link.addEventListener("mouseout", () => {
    link.firstElementChild.classList.remove("headerLink");
    headerLinks[0].firstElementChild.classList.add("headerLink");
  });
});

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

carouselArr.forEach((carro) => {
  let link = document.createElement("a");
  let imagem = document.createElement("img");
  let span = document.createElement("span");
  if (carro.url != "lancamento.html") {
    link.setAttribute("href", carro.url);
    link.setAttribute("target", "_blank");
  } else {
    link.setAttribute("href", carro.url);
  }

  link.innerText = carro.title;
  imagem.setAttribute("src", carro.img);
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
