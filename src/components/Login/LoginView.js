import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import UserNameContext from "../contexts/UserNameContext";
// Generic components style
import Brand from "../Shared/Brand";
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultForm from "../Shared/GenericStyles/DefaultFormStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";

function LoginView() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");

  const { setToken } = useContext(TokenContext);
  const { setUserName } = useContext(UserNameContext);

  const navigate = useNavigate();

  async function getUserData(e) {
    e.preventDefault();

    const body = {
      email: userEmail,
      password: userPassword
    }

    try {
      const response = await axios.post("http://localhost:5000/login", body);

      setToken(response.data.token);
      setUserName(response.data.userName);

      navigate("/home");
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <MainContainer>
      <Brand />
      <DefaultForm onSubmit={ getUserData }>
        <input type="email" value={ userEmail } onChange={ e => setUserEmail(e.target.value) } placeholder="Email" required/>
        <input type="password" value={ userPassword } onChange={ e=> setUserPassword(e.target.value) } placeholder="Senha" required/>
        <DefaultButton type="submit">Entrar</DefaultButton>
      </DefaultForm>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </MainContainer>
  );
}

export default LoginView;