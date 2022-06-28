import { useState } from "react";
import { Link } from "react-router-dom";
// Generic components style
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import BrandName from "../Shared/GenericStyles/BrandNameStyle";
import EntraceForm from "../Shared/GenericStyles/EntraceFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function LogonView() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");

  function getUserData(e) {
    e.preventDefault();

    const body = {
      email: userEmail,
      password: userPassword
    }
  }

  return (
    <MainContainer>
      <BrandName>MyWallet</BrandName>
      <EntraceForm onSubmit={ getUserData }>
        <input type="email" value={ userEmail } onChange={ e => setUserEmail(e.target.value) } placeholder="Email" required/>
        <input type="password" value={ userPassword } onChange={ e=> setUserPassword(e.target.value) } placeholder="Senha" required/>
        <DefaultButton type="submit">Entrar</DefaultButton>
      </EntraceForm>
      <Link to="/login">Primeira vez? Cadastre-se!</Link>
    </MainContainer>
  );
}

export default LogonView;