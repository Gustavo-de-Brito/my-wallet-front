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
import ButtonLoading from "../Shared/ButtonLoading";

function LoginView() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const { setToken } = useContext(TokenContext);
  const { setUserName } = useContext(UserNameContext);

  const navigate = useNavigate();

  async function getUserData(e) {
    setIsLoading(true);
    e.preventDefault();

    const body = {
      email: userEmail,
      password: userPassword
    }

    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${ API_URL }/login`, body);

      setToken(response.data.token);
      setUserName(response.data.userName);
      setIsLoading(false);

      navigate("/home");
    } catch(err) {
      console.log(err);
      if(err.response.status === 401) {
        alert("Email ou senha incorretos");
      }

      setIsLoading(false);
    }
  }

  return (
    <MainContainer>
      <Brand />
      <DefaultForm onSubmit={ getUserData }>
        <input 
          type="email"
          disabled={ isLoading }
          value={ userEmail }
          onChange={ e => setUserEmail(e.target.value) }
          placeholder="Email" required
        />
        <input
          type="password"
          disabled={ isLoading }
          value={ userPassword }
          onChange={ e=> setUserPassword(e.target.value) }
          placeholder="Senha"
          required
        />
        <DefaultButton disabled={ isLoading } type="submit">
          {
            isLoading
            ?
            <ButtonLoading widthLoader={ 100 } />
            :
            "Entrar"
          }
        </DefaultButton>
      </DefaultForm>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </MainContainer>
  );
}

export default LoginView;