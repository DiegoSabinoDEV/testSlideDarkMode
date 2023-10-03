/*document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
console.log("Isso e um teste no console do navegador");

var a = 1;
var b = 5;
var c = 4;
var d = a + b + c;
console.log(d);
*/

/*/Declaração de Variaveis
var a, b, c;
//Atribuição dos valores
a = 2;
b = 3;
c = a + b;
alert(c);
*/
/*
function mostraNome(nomeDaPessoa) {
  console.log(nomeDaPessoa);
}

mostraNome("Diego");
mostraNome("Sabino");
*/
function soma(num1, num2) {
  let somaDosNumeros = num1 + num2;
  return somaDosNumeros;
}

let meusNumeros = soma(4, 8);

console.log(meusNumeros);

function showAlert(message) {
  alert(message);
}

// Uso:
// showAlert("Olá, Mundo!");
function toggleVisibility(elementId) {
  let element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Uso:
// <button onclick="toggleVisibility('meuDiv')">Mostrar/Esconder</button>
// <div id="meuDiv">Este é um conteúdo ocultável.</div>
function calculateSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  alert("A soma é: " + sum);
}

// Uso:
// <input type="number" id="num1">
// <input type="number" id="num2">
// <button onclick="calculateSum()">Somar</button>
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Uso:
// <button onclick="changeBackgroundColor('red')">Vermelho</button>
// <button onclick="changeBackgroundColor('blue')">Azul</button>
function validateEmail() {
  let email = document.getElementById("email").value;
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!regex.test(email)) {
    alert("Insira um e-mail válido.");
    return false;
  } else {
    alert("E-mail válido.");
    return true;
  }
}

// Uso:
// <input type="email" id="email">
// <button onclick="validateEmail()">Validar</button>
let multi = (num1, num2) => {
  const multiplicao = num1 * num2;
  console.log(multi);
};
const multiplicao = multi;
