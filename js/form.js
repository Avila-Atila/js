const headerLinks = document.querySelectorAll("header nav li");

headerLinks.forEach((element) => {
  element.addEventListener("mouseover", () => {
    headerLinks[2].firstElementChild.classList.remove("headerLink");
    element.firstElementChild.classList.add("headerLink");
  });
  element.addEventListener("mouseout", () => {
    element.firstElementChild.classList.remove("headerLink");
    headerLinks[2].firstElementChild.classList.add("headerLink");
  });
});

class contato {
  constructor(nome, email, telefone, mensagem) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.mensagem = mensagem;
  }
  static enviarInfo(objeto) {
    this.objetoFinal = objeto;
    console.log(this.objetoFinal);
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("mensagem").value
  );
  contato.enviarInfo(data);
}

const campo = document.querySelector('[name="contato"]');

function Enviar() {
  let nome = document.getElementById("nomeid");

  if (nome.value != "" && campo.value != "") {
    alert(
      `Obrigado sr(a) ${nome.value} os seus dados foram encaminhados com sucesso. `
    );
  }
}
