const btNumeros = document.querySelectorAll("#bt");
const btSoma = document.getElementById("btSoma");
const btIgual = document.getElementById("btIgual");
const btLimpar = document.getElementById("btLimpar");
const btReset = document.getElementById("btReset");
const inputExpressao = document.getElementById("expressao");

//Alimenta input
const digitar = function(valorBotao) {
  let textoExpressao = inputExpressao.value;
  let tamanhoTexto = textoExpressao.length;

  if (tamanhoTexto === 0 && !Number(valorBotao)) {
    return false;
  } else {
    let lastChar = textoExpressao[tamanhoTexto - 1];
    if (lastChar === "+" && valorBotao === "+") {
      return false;
    }

    let valorAtual = inputExpressao.value;
    inputExpressao.value = `${valorAtual}${valorBotao}`;
  }
};

//recebe o evento dos botoes de numero
btNumeros.forEach(bt => {
  bt.addEventListener("click", function() {
    digitar(bt.innerHTML);
  });
});

//evento de click do botao somar
btSoma.addEventListener("click", function() {
  digitar(btSoma.innerHTML);
});

//evento de click do botao igual
btIgual.addEventListener("click", function() {
  try {
    let textoExpressao = inputExpressao.value;
    let tamanhoTexto = textoExpressao.length;

    let lastChar = textoExpressao[tamanhoTexto - 1];
    if (lastChar === "+") {
      alert("Ultimo caracter não pode ser um operador");
      return false;
    }
    let valorExpressao = inputExpressao.value;
    inputExpressao.value = eval(valorExpressao);
  } catch (error) {
    alert("Expressão Inválida");
  }
});

//evento de limpar campo
btReset.addEventListener("click", function() {
  inputExpressao.value = "";
});

//evento de limpar ultimo caracter digitado
btLimpar.addEventListener("click", function() {
  let texto = inputExpressao.value;
  texto = texto.substring(0, texto.length - 1);
});
// inputExpressao.value = texto;

//evento calcular em enter
// let resultado
inputExpressao.addEventListener ('keypress', function(event){
   
  //  let textoExpressao = inputExpressao.value;
  //  let tamanhoTexto = textoExpressao.length;
  console.log (inputExpressao)
  if (event.code === "Enter"){

    // try {
    //   if (inputExpressao.value[inputExpressao.value.length -1] === "+") {
    //     alert("Ultimo caracter não pode ser um operador");
    //     return false;
    //   }
    //   inputExpressao.value = eval(inputExpressao.value);

    // } catch (error) {
    //   alert('Falhou')
    // }

    try {
      let texto = inputExpressao.value;
      let tamanhoTexto = texto.length;
  
      let ultimoChar = texto[tamanhoTexto - 1];
      if (ultimoChar === "+") {
        alert("Ultimo caracter não pode ser um operador");
        return false;
      }
      inputExpressao.value = eval(texto);
    } catch (error) {
      alert("Expressão Inválida");
    } 
    
  }
  console.log (event.code)
})


// btIgual.addEventListener("click", function() {
  // try {
    // let textoExpressao = inputExpressao.value;
    // let tamanhoTexto = textoExpressao.length;
