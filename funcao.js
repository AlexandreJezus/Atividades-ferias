function crud() {
  if (estado === "menu") {
    if (input === "1") {
      estado = "adicionar_dia";
      console.log("Digite a data do dia:");
    } else if (input === "2") {
      estado = "remover_dia";
      console.log("Digite a data para remover:");
    } else if (input === "3") {
      if (dia.length === 0) {
        console.log("Nenhuma data encontrada");
      } else {
        console.log("Lista de datas:");
        for (let data of dia) {
          console.log(
            `Data: ${data.data}, Dia: ${data.dia}, Atividade: ${data.atividade}`
          );
        }
      }
      console.log(
        "Escolha uma opção:\n1. Adicionar dia\n2. Cancelar dia\n3. Listar atividades\n4. Sair\n5.Atualizar dia"
      );
    } else if (input === "4") {
      console.log("Saindo...");
      process.exit();
    } else if (input === "5") {
      estado = "atualizar_dia";
      console.log("Atividades das férias:");
      for (let data of dia) {
        console.log(
          `Data: ${data.dia}, Dia: ${data.dia}, Atividade: ${data.dia}`
        );
      }
      console.log("Digite a data que deseja atualizar:");
    } else {
      console.log("Opção inválida. Selecione novamente.");
    }
  } else if (estado === "adicionar_data") {
    data = input;
    estado = "adicionar_dia";
    console.log("Digite o dia:");
  } else if (estado === "adicionar_dia") {
    dia = input;
    estado = "adicionar_atividade";
    console.log("Digite o dia a dia:");
  } else if (estado === "adicionar_dia") {
    dia = input;
  }
  dia.push({
    data: data,
    dia: dia,
    atividade: atividade,
  });
  console.log("Dia adicionado com sucesso!");
  estado = "menu";
  console.log(
    "Escolha uma opção:\n1. Adicionar dia\n2. Remover dia\n3. Listar os dias\n4. Sair\n5.Atualizar dia"
  );
}
module.exports = {
  crud,
};
