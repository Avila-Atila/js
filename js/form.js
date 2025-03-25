//class contato

class contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
  }
  static enviarInfo(objeto) {
    console.log(objeto);
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value
  );
  contato.enviarInfo(data);
}

const campo = document.querySelector('[name="contato"]');

function Enviar() {
  let nome = document.getElementById("nomeid");

  if (nome.value != "" && campo.value != "") {
    alert(
      `Obrigado sr(a) ${nome.value} os seus dados foram encaminhados com sucesso. Entraremos em contato pelo seu ${campo.value} `
    );
  }
}
