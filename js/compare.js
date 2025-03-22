//car
let carArr = [];

class Car {
  constructor(
    nome,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    preco,
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

carArr.push(
  new Car(
    "XL Cabine Simples 2.2 Diesel 4X4 MT 2022",
    "511",
    "1821",
    "232",
    "1234",
    "2.2",
    "160",
    "1420",
    "Aço Esampado 16",
    "R$ 183.850,00",
    "img/XL Cabine.jpg"
  )
);
carArr.push(
  new Car(
    "XLS 2.2 Diesel 4X4 AT 2022",
    "511",
    "1821",
    "232",
    "1076",
    "2.2",
    "160",
    "1180",
    "Liga Leve 17",
    "R$ 220.690,00",
    "img/xls 2.2 diesel.jpg"
  )
);

carArr.push(
  new Car(
    "Storm 3.2 Diesel 4X4 AT 2022",
    "511",
    "1821",
    "232",
    "1040",
    "3.2",
    "200",
    "1180",
    "Liga Leve 17",
    "R$ 222.790,00",
    "img/storm.jpg"
  )
);

const checkbox = document.querySelectorAll(".checkbox");
checkbox.forEach((element, i) => {
  element.checked = false;
  element.addEventListener("change", () => {
    this.SetCarToCompare(element, carArr[i]);
  });
});
// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) return i;
  }
  return -1;
}
let ordemCarros = [];
function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked) {
      ordemCarros.push(GetCarArrPosition(carArr, carClass));
      console.log(ordemCarros);
    } else {
      ordemCarros = ordemCarros.filter(
        (x) => x !== GetCarArrPosition(carArr, carClass)
      );
      console.log(ordemCarros);
    }
  } else {
    throw "You need set a Car Class";
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
  if (ordemCarros.length < 2 || ordemCarros.length > 2) {
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
    document.getElementById(`compare_preco_${i}`).innerText =
      carArr[posicao].preco;
  });
}
