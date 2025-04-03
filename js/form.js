const headerLinks = document.querySelectorAll("header nav li");
const campos = document.querySelectorAll(".fordform");
const nome = document.getElementById("nomeid");

headerLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    headerLinks[2].firstElementChild.classList.remove("headerLink");
    link.firstElementChild.classList.add("headerLink");
  });
  link.addEventListener("mouseout", () => {
    link.firstElementChild.classList.remove("headerLink");
    headerLinks[2].firstElementChild.classList.add("headerLink");
  });
});

class contato {
  constructor(nome, email, telefone, mensagem, tipoDeMensagem) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.mensagem = mensagem;
    this.tipoDeMensagem = tipoDeMensagem;
  }
  static enviarInfo(respostaForm) {
    console.table(respostaForm);
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("mensagem").value,
    form.elements.namedItem("contato").value
  );
  contato.enviarInfo(data);
}

function Enviar() {
  let validar = true;
  campos.forEach((input) => {
    if (input.value === "") {
      validar = false;
    }
  });
  if (validar) {
    alert(
      `Obrigado sr(a) ${nome.value}, os seus dados foram encaminhados com sucesso!`
    );
  }
}
