const headerLinks = document.querySelectorAll("header nav li");
const checkbox = document.querySelectorAll(".checkbox");
const compararCarros = document.getElementById("button__comparar");
let carArr = [];

headerLinks.forEach((element) => {
  element.addEventListener("mouseover", () => {
    headerLinks[1].firstElementChild.classList.remove("headerLink");
    element.firstElementChild.classList.add("headerLink");
  });
  element.addEventListener("mouseout", () => {
    element.firstElementChild.classList.remove("headerLink");
    headerLinks[1].firstElementChild.classList.add("headerLink");
  });
});

checkbox.forEach((element, i) => {
  element.checked = false;
  element.value = i;
});

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    this.nome = nome;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.preco = preco;
    this.image = image;
  }
}

function SetCarToCompare(el, carClass) {
  if (!carClass instanceof Car) {
    return "You need set a Car Class";
  }

  if (el.checked) {
    carArr.push(carClass);
  } else {
    carArr = carArr.filter((x) => x.nome !== carClass.nome);
  }

  if (carArr.length >= 2) {
    compararCarros.classList.add("button__selecionado");
    checkbox.forEach((element) => {
      if (!element.checked) {
        element.setAttribute("disabled", true);
      }
    });
  } else {
    compararCarros.classList.remove("button__selecionado");
    checkbox.forEach((element) => {
      element.removeAttribute("disabled");
    });
  }
}

function ShowCompare() {
  if (carArr.length != 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }
  ordenarCarros(carArr);

  UpdateCompareTable(carArr);

  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function ordenarCarros(arr) {
  if (arr[0].preco > arr[1].preco) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
}

function UpdateCompareTable(lista) {
  // document.querySelectorAll("table tr img").forEach((img) => img.remove());

  lista.forEach((carro, i) => {
    let posicaoImagem = document.getElementById(`compare_image_${i}`);
    let imagem = posicaoImagem.querySelector("img");

    if (!imagem) {
      imagem = document.createElement("img");
      imagem.classList.add("imagemProdutoTabela");
      posicaoImagem.appendChild(imagem);
    }

    imagem.src = carro.image;

    document.getElementById(`compare_modelo_${i}`).innerText = carro.nome;
    document.getElementById(`compare_alturacacamba_${i}`).innerText =
      carro.alturaCacamba;
    document.getElementById(`compare_alturaveiculo_${i}`).innerText =
      carro.alturaVeiculo;
    document.getElementById(`compare_alturasolo_${i}`).innerText =
      carro.alturaSolo;
    document.getElementById(`compare_capacidadecarga_${i}`).innerText =
      carro.capacidadeCarga;
    document.getElementById(`compare_motor_${i}`).innerText = carro.motor;
    document.getElementById(`compare_potencia_${i}`).innerText = carro.potencia;
    document.getElementById(`compare_volumecacamba_${i}`).innerText =
      carro.volumeCacamba;
    document.getElementById(`compare_roda_${i}`).innerText = carro.roda;
    document.getElementById(`compare_preco_${i}`).innerText =
      carro.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  });
}
