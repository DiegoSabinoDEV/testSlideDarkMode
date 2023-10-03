/*const area = document.getElementById("area");

area.addEventListener("click", function () {
  area.innerText = "Clicou!";
});

// Evento quando o mouse entra na div (hover)
area.addEventListener("mouseenter", function () {
  // Altera a cor de fundo para outra cor (por exemplo, vermelho)
  area.style.backgroundColor = "red";
});

// Evento quando o mouse sai da div
area.addEventListener("click", function () {
  // Restaura a cor de fundo original
  area.style.backgroundColor = "rgb(42, 139, 42)";

  // Altera o texto dentro da div para "Saiu"
  area.textContent = "Interaja depois do click";
});*/

const area = document.getElementById("area");

function clicar() {
  area.innerText = "Clicou!";
  area.style.background = "blue";
}

function entrou() {
  area.style.backgroundColor = "red";
}

function saiu() {
  area.style.backgroundColor = "rgb(42, 139, 42)";
  area.textContent = "Interaja...";
}

area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrou);
area.addEventListener("mouseleave", saiu);

function somar() {
  var txtn1 = window.document.querySelector("input#txtn1");
  let txtn2 = window.document.querySelector("input#txtn2"); // verificar input#
  let res = window.document.querySelector("div#res");
  let n1 = Number(txtn1.value);
  let n2 = Number(txtn2.value);
  let s = n1 + n2;
  res.innerHTML = `A soma entre ${n1} + ${n2} é igual a <strong>${s}</strong>`;
}
