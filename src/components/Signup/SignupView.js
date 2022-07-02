import { useState } from "react";
import { Link } from "react-router-dom";
// Generic components style
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import Brand from "../Shared/Brand";
import EntraceForm from "../Shared/GenericStyles/EntraceFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function SignupView() {
  const [ userName, setUserName ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ confirmPassword, setconfirmPassword ] = useState("");

  function getUserData() {
    // TODO: verificar se as senhas sao iguais

    const body = {
      name: userName,
      email: userEmail,
      password: userPassword
    }
  }

  return (
    <MainContainer>
      <Brand />
      <EntraceForm onSubmit={ getUserData }>
        <input type="text" value={ userName } onChange={ e => setUserName(e.target.value) } placeholder="Nome" required />
        <input type="email" value={ userEmail } onChange={ e => setUserEmail(e.target.value) } placeholder="Email" required />
        <input type="password" value={ userPassword } onChange={ e => setUserPassword(e.target.value) } placeholder="Senha" required />
        <input type="password" value={ confirmPassword } onChange={ e => setconfirmPassword(e.target.value) } placeholder="Confirme a senha" required />
        <DefaultButton type="submit">Cadastrar</DefaultButton>
      </EntraceForm>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </MainContainer>
  );
}

export default SignupView;