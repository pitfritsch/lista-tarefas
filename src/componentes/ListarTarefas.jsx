import styled from "styled-components";

const StyleUlTarefa = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  gap: 20px;

  > li {
    display: flex;
    margin: 0;
    width: 700px;
    gap: 10px;
    justify-content: space-between;
    list-style: circle;
  }
`;

const StyleEspacoButton = styled.div`
  display: flex;
  gap: 10px;

  > button {
    width: 80px;
    border-radius: 5px;
    font-size: 14px;
    color: white;
    background-color: #915785;
    padding: 8px;
    :active {
      transform: scale(0.95);
    }
  }
`;

export default function ListarTarefa({
  listaTarefas,
  editarTarefa,
  excluirTarefa,
}) {
  function handleClickEditar(index) {
    const novaTarefa = prompt("Edite a sua tarefa..");

    if (novaTarefa === "") {
      alert(
        "Você não alterou a tarefa antiga, altere a tarefa colocando um novo texto"
      );
    } else editarTarefa(index, novaTarefa);
  }

  function handleClickExcluir(index) {
    excluirTarefa(index, 1);
  }

  return (
    <StyleUlTarefa>
      {listaTarefas.map((tarefa, index) => {
        return (
          <li>
            {tarefa}
            <StyleEspacoButton>
              <button onClick={() => handleClickEditar(index)}>Editar</button>
              <button onClick={() => handleClickExcluir(index)}>Excluir</button>
            </StyleEspacoButton>
          </li>
        );
      })}
    </StyleUlTarefa>
  );
}
