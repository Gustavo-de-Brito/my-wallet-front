import { useState, useContext } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext.js"
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultForm from "../Shared/GenericStyles/DefaultFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function NewEntrace() {
  const [ value, setValue ] = useState("R$ 0.00");
  const [ description, setDescription ] = useState("");

  const { token } = useContext(TokenContext);

  const navigate = useNavigate();

  async function sendTransaction(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const formatedValue = Number(value.replace("R$ ", ""));

    const body = {
      value: formatedValue,
      description,
      type: "entrace",
      date: dayjs().format("DD/MM")
    };

    try {
      await axios.post("https://my-wallet726.herokuapp.com/transactions", body, config);

      navigate("/home");
    } catch(err) {
      alert("Ocorreu um erro ao tentar enviar a entrada");
    }
  }

  function formatMoneyValue(e) {
    // Tests if was removed or add a number for formatting
    const moneyRegex = /\.[0-9]{3}$/;
    const addedNumber = moneyRegex.test(e.target.value);
    const divisionToDecimal = addedNumber ? 100 : 10000;

    const moneyValue = Number(e.target.value.replace("R$ ", "")) * 1000;
    const decimalValue = moneyValue / divisionToDecimal;

    if(!isNaN(decimalValue)) {
      setValue(`R$ ${ decimalValue.toFixed(2) }`);
    }
  }

  return (
    <MainContainer>
      <ViewContent>
        <Header>
          <h2>Nova Entrada</h2>
        </Header>
        <DefaultForm onSubmit={ sendTransaction } >
          <input value={ value } onChange={ formatMoneyValue } type="text" placeholder="Valor" required />
          <input value={ description } onChange={ e => setDescription(e.target.value) }  type="text" placeholder="Descrição" required />
          <DefaultButton type="submit">Salvar entrada</DefaultButton>
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

export default NewEntrace;