const prompt = require("prompt-sync")();
const funcao = require("./funcao.js");

function menuInicial() {
  let input = prompt(
    `Escolha uma opção:
      1. Adicionar o dia
      2. Remover o dia
      3. Listar os dias
      4. Sair
      5. Atualizar o dia`
  );
  let op = +prompt("Digite a opção: ");
  return op;
}
function crud(opcao) {
  if (opcao === 1) {
  } else if (opcao === 2) {
  } else if (opcao === 3) {
  } else if (opcao === 4) {
  } else if (opcao === 5) {
  }
}

while (true) {
  let conclusao = menuInicial();
  crud(opcao);
}
