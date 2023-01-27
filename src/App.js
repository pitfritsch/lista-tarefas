import { useState } from "react";
import styled from "styled-components";
import CriarTarefa from "./componentes/CriarTarefa";
import ListarTarefa from "./componentes/ListarTarefas";
import Titulo from "./componentes/Titulo";

const StyleApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2b0a24;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyleListaTarefas = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  gap: 20px;
`;

function App() {
  const [listaTarefas, setlistaTarefas] = useState([]);

  function criarTarefa(descricao) {
    // const novalista = [...listaTarefas];
    // novalista.push(descricao);
    // setlistaTarefas(novalista);
    setlistaTarefas([...listaTarefas, descricao]); //nova lista sem nome
  }

  return (
    <StyleApp>
      <Titulo titulo="Lista de Tarefas" />
      <StyleListaTarefas>
        <CriarTarefa
          placeholder="Crie uma tarefa aqui..."
          criar={criarTarefa}
        />
        <ListarTarefa listaTarefas={listaTarefas} />
      </StyleListaTarefas>
    </StyleApp>
  );
}

export default App;
