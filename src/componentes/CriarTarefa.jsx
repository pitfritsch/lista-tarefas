import { useState } from "react";
import styled from "styled-components";

const StyleCriarTarefa = styled.div`
  display: flex;
  gap: 15px;

  > input {
    border-radius: 5px;
    width: 800px;
    font-size: 14px;
    padding: 10px;
  }
  > button {
    border-radius: 5px;
    width: 100px;
    font-size: 14px;
    padding: 10px;
    color: white;
    background-color: #915785;
    font-weight: bold;
    :active {
      transform: scale(0.95);
    }
  }
`;

export default function CriarTarefa({ placeholder, criar }) {
  const [descricao, setDescricao] = useState("");

  function handleChange(event) {
    setDescricao(event.target.value);
  }

  function handleClick() {
    criar(descricao);
    setDescricao("");
  }

  return (
    <StyleCriarTarefa>
      <input
        placeholder={placeholder}
        onChange={handleChange}
        value={descricao}
      />
      <button onClick={handleClick}>Criar</button>
    </StyleCriarTarefa>
  );
}
