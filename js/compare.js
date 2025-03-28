//car
let carArr = [];

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

const checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach((element, i) => {
  element.checked = false;
});

function GetCarArrPosition(el) {
  return Number(el.value);
}

let ordemCarros = [];

function SetCarToCompare(el, carClass) {
  if (!carClass instanceof Car) {
    return "You need set a Car Class";
  }

  if (el.checked) {
    carArr[GetCarArrPosition(el)] = carClass;
    ordemCarros.push(el.value);
  } else {
    carArr[GetCarArrPosition(el)] = null;
    ordemCarros = ordemCarros.filter((x) => x !== el.value);
  }

  if (ordemCarros.length >= 2) {
    checkbox.forEach((element) => {
      if (!element.checked) {
        element.setAttribute("disabled", true);
      }
    });
  } else {
    checkbox.forEach((element) => {
      element.removeAttribute("disabled");
    });
  }
}

function ShowCompare() {
  if (ordemCarros.length != 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  ordemCarros.sort();

  UpdateCompareTable(ordemCarros);

  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable(lista) {
  // document.querySelectorAll("table tr img").forEach((img) => img.remove());

  lista.forEach((posicao, i) => {
    let posicaoImagem = document.getElementById(`compare_image_${i}`);
    let imagem = posicaoImagem.querySelector("img");

    if (!imagem) {
      imagem = document.createElement("img");
      imagem.classList.add("imagemProdutoTabela");
      posicaoImagem.appendChild(imagem);
    }

    imagem.src = carArr[posicao].image;

    document.getElementById(`compare_modelo_${i}`).innerText =
      carArr[posicao].nome;
    document.getElementById(`compare_alturacacamba_${i}`).innerText =
      carArr[posicao].alturaCacamba;
    document.getElementById(`compare_alturaveiculo_${i}`).innerText =
      carArr[posicao].alturaVeiculo;
    document.getElementById(`compare_alturasolo_${i}`).innerText =
      carArr[posicao].alturaSolo;
    document.getElementById(`compare_capacidadecarga_${i}`).innerText =
      carArr[posicao].capacidadeCarga;
    document.getElementById(`compare_motor_${i}`).innerText =
      carArr[posicao].motor;
    document.getElementById(`compare_potencia_${i}`).innerText =
      carArr[posicao].potencia;
    document.getElementById(`compare_volumecacamba_${i}`).innerText =
      carArr[posicao].volumeCacamba;
    document.getElementById(`compare_roda_${i}`).innerText =
      carArr[posicao].roda;
    document.getElementById(`compare_preco_${i}`).innerText = carArr[
      posicao
    ].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  });
}
