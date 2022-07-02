import styled from "styled-components";
import { useState } from "react";
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultForm from "../Shared/GenericStyles/DefaultFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function NewExit() {
  const [ value, setValue ] = useState("");
  const [ description, setDescription ] = useState("");

  function getTransaction(e) {
    e.preventDefault();
  }

  return (
    <MainContainer>
      <ViewContent>
        <Header>
          <h2>Nova Saída</h2>
        </Header>
        <DefaultForm onSubmit={ getTransaction } >
          <input value={ value } onChange={ e => setValue(e.target.value) } type="text" placeholder="Valor" required />
          <input value={ description } onChange={ e => setDescription(e.target.value) }  type="text" placeholder="Descrição" required />
          <DefaultButton type="submit">Salvar Saída</DefaultButton>
        </DefaultForm>
      </ViewContent>
    </MainContainer>
  );
}

const ViewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const Header = styled.div`
  width: 92%;
  margin: 24px 24px 8px 24px;
  font-size: 26px;
  font-weight: bold;
  color: #FFFFFF;
`;

export default NewExit;