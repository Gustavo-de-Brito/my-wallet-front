import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
// Generic components style
import Brand from "../Shared/Brand";
import ButtonLoading from "../Shared/ButtonLoading";
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultForm from "../Shared/GenericStyles/DefaultFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function SignupView() {
  const [ userName, setUserName ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ confirmPassword, setconfirmPassword ] = useState("");

  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(false);

  async function getUserData(e) {
    setIsLoading(true);

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
      if(err.response.status === 422) {
        alert("Email ou senha inválidos");
      } else if(err.respnse.status === 409) {
        alert("Email já cadastrado");
      }
      setIsLoading(false);
    }
  }

  return (
    <MainContainer>
      <Brand />
      <DefaultForm onSubmit={ getUserData }>
        <input
          type="text"
          disabled={ isLoading }
          value={ userName }
          onChange={ e => setUserName(e.target.value) }
          placeholder="Nome"
          required
        />
        <input
          type="email"
          disabled={ isLoading }
          value={ userEmail }
          onChange={ e => setUserEmail(e.target.value) }
          placeholder="Email"
          required
        />
        <input
          type="password"
          disabled={ isLoading }
          value={ userPassword }
          onChange={ e => setUserPassword(e.target.value) }
          placeholder="Senha"
          required
        />
        <input
          type="password"
          disabled={ isLoading }
          value={ confirmPassword }
          onChange={ e => setconfirmPassword(e.target.value) }
          placeholder="Confirme a senha"
          required
        />
        <PasswordRulesContainer>
          <span>A senha deve conter:</span>
          <PasswordRules>
            <li>Conter entre 8 e 30 caracteres</li>
            <li>Conter pelo menos um número</li>
            <li>Conter pelo menos uma letra maiúscula</li>
            <li>Conter pelo menos uma letra minúscula</li>
            <li>Conter pelo menos um caractere especial</li>
          </PasswordRules>
        </PasswordRulesContainer>
        <DefaultButton disabled={ isLoading } type="submit">
          {
            isLoading
            ?
            <ButtonLoading widthLoader={ 100 } />
            :
            "Cadastrar"
          }
        </DefaultButton>
      </DefaultForm>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </MainContainer>
  );
}

const PasswordRulesContainer = styled.div`
  width: 100%;
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.7);

  span {
    color: #000000;
    font-size: 18px;
    font-weight: bold;
  }
`;

const PasswordRules = styled.ul`
  width: 100%;
  margin-left: 20px;
  list-style-type: disc;
  
  li {
    color: #000000;
    font-size: 18px;
    margin: 6px 0;
  }

`;

export default SignupView;