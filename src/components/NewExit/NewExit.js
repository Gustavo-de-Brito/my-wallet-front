import { useState, useContext } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonLoading from "../Shared/ButtonLoading.js";
import TokenContext from "../contexts/TokenContext.js"
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultForm from "../Shared/GenericStyles/DefaultFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";
import LoginAgainMessage from "../Shared/LoginAgainMessage.js";

function NewExit() {
  const [ value, setValue ] = useState("R$ 0.00");
  const [ description, setDescription ] = useState("");
  const [ userUnauthorized, setUserUnauthorized ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const { token } = useContext(TokenContext);

  const navigate = useNavigate();

  async function sendTransaction(e) {
    setIsLoading(true);
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
      type: "exit",
      date: dayjs().format("DD/MM")
    };

    try {
      await axios.post(`https://my-wallet-back-5nte.onrender.com/transactions`, body, config);

      navigate("/home");
    } catch(err) {
      if(err.response.status === 401) {
        setUserUnauthorized(true);
      } else {
        alert("Ocorreu um erro ao tentar enviar a saída");
      }
      setIsLoading(false);
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
      {
        userUnauthorized
        ?
        <LoginAgainMessage />
        :
        <ViewContent>
          <Header>
            <h2>Nova Saída</h2>
          </Header>
          <DefaultForm onSubmit={ sendTransaction } >
            <input
              value={ value }
              disabled={ isLoading }
              onChange={ formatMoneyValue }
              type="text"
              placeholder="Valor"
              required
            />
            <input
              value={ description }
              disabled={ isLoading }
              onChange={ e => setDescription(e.target.value) }
              type="text"
              placeholder="Descrição"
              required
            />
            <DefaultButton disable={ isLoading } type="submit">
              {
                isLoading
                ?
                <ButtonLoading widthLoader={ 100 } />
                :
                "Salvar Saída"
              }
              </DefaultButton>
          </DefaultForm>
        </ViewContent>
      }
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