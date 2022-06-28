import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LoginView() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");

  function getUserData(e) {
    e.preventDefault();

    const body = {
      email: userEmail,
      password: userPassword
    }

    console.log(body);
  }

  return (
    <MainContainer>
      <BrandName>MyWallet</BrandName>
      <EntraceForm onSubmit={ getUserData }>
        <input type="email" value={ userEmail } onChange={ e => setUserEmail(e.target.value) } placeholder="Email" required/>
        <input type="password" value={ userPassword } onChange={ e=> setUserPassword(e.target.value) } placeholder="Senha" required/>
        <Button type="submit">Entrar</Button>
      </EntraceForm>
      <Link to="/logon">Primeira vez? Cadastre-se!</Link>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #8C11BE;
  color: #FFFFFF;

  a {
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
  }
`;

const BrandName = styled.h1`
  font-family: 'Saira Stencil One', cursive;
  font-size: 32px;
`;

const EntraceForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 30px 0 34px 0;

  input {
    width: 100%;
    margin-bottom: 14px;
    padding: 18px 16px;
    font-size: 20px;
    border-radius: 6px;
    border: none;
  }

  input::placeholder {
    color: #000000;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  background-color: #A328D6;
  color: #FFFFFF;
  border-radius: 6px;
  border: none;
`;

export default LoginView;