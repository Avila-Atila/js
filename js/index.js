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
  new Carousel("img/imagem_2.jpg", "Ford a nossa história", "#")
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

carouselArr.forEach((element) => {
  let imagem = document.createElement("img");
  let titulo = document.createElement("p");
  titulo.innerText = element.title;
  imagem.setAttribute("src", element.img);
  imagem.style.display = "none";
  titulo.style.display = "none";
  container.insertAdjacentElement("beforeEnd", imagem);
  container2.insertAdjacentElement("beforeEnd", titulo);
});

Carousel.Start(carouselArr);
