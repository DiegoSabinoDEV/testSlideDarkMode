// Aqui estamos pegando o elemento HTML pelo seu ID 'darkbtn'.
// Este é provavelmente um botão ou uma chave de alternância para mudar para o modo escuro.
const darkbtn = document.getElementById("darkbtn");

// Pegamos o elemento body do documento. O elemento body representa o conteúdo do documento.
const body = document.body;

// Checamos se o valor associado à chave "darkMode" no localStorage é igual a "enabled".
// Se for "enabled", 'isDarkMode' será true. Se não for, será false.
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Se 'isDarkMode' for verdadeiro, então fazemos duas coisas:
// 1. Adicionamos a classe "dark-mode" ao body.
// 2. Definimos a propriedade 'checked' do botão 'darkbtn' como true,
//    indicando que a chave de alternância está na posição 'on' ou ativada.
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkbtn.checked = true;
}

// Adicionamos um 'event listener' ao 'darkbtn' que ouve por mudanças (evento 'change').
// Isto significa que, sempre que 'darkbtn' for alterado (por exemplo, se for um checkbox e for marcado ou desmarcado),
// a função fornecida será executada.
darkbtn.addEventListener("change", () => {
  // Dentro desta função, verificamos se 'darkbtn' está marcado.
  // Se estiver marcado, então:
  // 1. Adicionamos a classe "dark-mode" ao body, o que provavelmente escurece o tema do site.
  // 2. Salvamos a escolha do usuário no localStorage para que, quando ele recarregar a página,
  //    a sua escolha de modo escuro seja lembrada.
  if (darkbtn.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    // Se 'darkbtn' não estiver marcado, então:
    // 1. Removemos a classe "dark-mode" do body, voltando ao tema claro.
    // 2. Também atualizamos o localStorage para refletir que o modo escuro está desativado.
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
