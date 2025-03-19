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
    "img/xls 2.2 diesel.jgp"
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
    "img/storm.jgp"
  )
);

checkbox = document.querySelectorAll(".checkbox");
checkbox.forEach((element, i) => {
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

function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked) {
      UpdateCompareTable(carClass);
    } else {
    }
  } else {
    throw "You need set a Car Class";
  }
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  //   UpdateCompareTable();
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable(element) {
  document.getElementById("compare_modelo_0").innerText = element.nome;
  document.getElementById("compare_alturacacamba_0").innerText =
    element.alturaCacamba;
  document.getElementById("compare_alturaveiculo_0").innerText =
    element.alturaVeiculo;
  document.getElementById("compare_alturasolo_0").innerText =
    element.alturaSolo;
  document.getElementById("compare_capacidadecarga_0").innerText =
    element.capacidadeCarga;
  document.getElementById("compare_capacidadecarga_0").innerText =
    element.motor;
  document.getElementById("compare_motor_0").innerText = element.potencia;
  document.getElementById("compare_potencia_0").innerText =
    element.volumeCacamba;
  document.getElementById("compare_volumecacamba_0").innerText = element.roda;
  document.getElementById("compare_roda_0").innerText = element.preco;
  document.getElementById("compare_preco_0").innerText = element.image;
}
