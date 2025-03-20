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

checkbox = document.querySelectorAll(".checkbox");
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
  let checkbox = document.querySelectorAll("input[type='checkbox']");
  if (carClass instanceof Car) {
    if (el.checked) {
      if (ordemCarros.length == 1) {
        checkbox.forEach((element, i) => {
          if (!checkbox[i].checked) {
            checkbox[i].setAttribute("disabled", "true");
          }
        });
      }
      ordemCarros.push(GetCarArrPosition(carArr, carClass));
      // ordemCarros.push(99);

      console.log(ordemCarros);
    } else {
      checkbox.forEach((element, i) => {
        if (!checkbox[i].checked) {
          checkbox[i].removeAttribute("disabled");
        }
      });

      ordemCarros = ordemCarros.filter(
        (x) => x !== GetCarArrPosition(carArr, carClass)
      );
      console.log(ordemCarros);
    }
  } else {
    throw "You need set a Car Class";
  }
}

function ShowCompare() {
  if (ordemCarros.length < 2 || ordemCarros.length > 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }
  let carrosDisplay = [];
  ordemCarros.sort();
  ordemCarros.forEach((element) => {
    carrosDisplay.push(carArr[element]);
  });
  UpdateCompareTable(carrosDisplay);
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
  document.querySelectorAll("table tr img").forEach((img) => img.remove());
}

function UpdateCompareTable(element) {
  let imagem = [];
  element.forEach((car) => {
    imagem.push(document.createElement("img"));
  });
  element.forEach((carro, i) => {
    let posicao = i;
    imagem[posicao].setAttribute("src", carro.image);
    document
      .getElementById(`compare_image_${posicao}`)
      .insertAdjacentElement("afterbegin", imagem[posicao]);
    document.getElementById(`compare_modelo_${posicao}`).innerText = carro.nome;
    document.getElementById(`compare_alturacacamba_${posicao}`).innerText =
      carro.alturaCacamba;
    document.getElementById(`compare_alturaveiculo_${posicao}`).innerText =
      carro.alturaVeiculo;
    document.getElementById(`compare_alturasolo_${posicao}`).innerText =
      carro.alturaSolo;
    document.getElementById(`compare_capacidadecarga_${posicao}`).innerText =
      carro.capacidadeCarga;
    document.getElementById(`compare_motor_${posicao}`).innerText = carro.motor;
    document.getElementById(`compare_potencia_${posicao}`).innerText =
      carro.potencia;
    document.getElementById(`compare_volumecacamba_${posicao}`).innerText =
      carro.volumeCacamba;
    document.getElementById(`compare_roda_${posicao}`).innerText = carro.roda;
    document.getElementById(`compare_preco_${posicao}`).innerText = carro.preco;
  });
}
