import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Generic components style
import Brand from "../Shared/Brand";
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultForm from "../Shared/GenericStyles/DefaultFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function SignupView() {
  const [ userName, setUserName ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ confirmPassword, setconfirmPassword ] = useState("");

  const navigate = useNavigate();

  async function getUserData(e) {
    e.preventDefault();

    if(userPassword !== confirmPassword) {
      return alert("As senhas não são iguais");
    } 

    const body = {
      name: userName,
      email: userEmail,
      password: userPassword
    }

    try {
      await axios.post("https://my-wallet726.herokuapp.com/sign-up", body);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MainContainer>
      <Brand />
      <DefaultForm onSubmit={ getUserData }>
        <input type="text" value={ userName } onChange={ e => setUserName(e.target.value) } placeholder="Nome" required />
        <input type="email" value={ userEmail } onChange={ e => setUserEmail(e.target.value) } placeholder="Email" required />
        <input type="password" value={ userPassword } onChange={ e => setUserPassword(e.target.value) } placeholder="Senha" required />
        <input type="password" value={ confirmPassword } onChange={ e => setconfirmPassword(e.target.value) } placeholder="Confirme a senha" required />
        <DefaultButton type="submit">Cadastrar</DefaultButton>
      </DefaultForm>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </MainContainer>
  );
}

export default SignupView;