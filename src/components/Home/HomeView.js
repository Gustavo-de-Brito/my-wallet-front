import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import UserNameContext from "../contexts/UserNameContext";
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";
import History from "./History";
import { IoExitOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from "react-icons/io";

function Home() {
  const [ userData, setUserData ] = useState({});

  const { token, setToken } = useContext(TokenContext);
  const { userName, setUserName } = useContext(UserNameContext);

  const navigate = useNavigate();

  function logoutUser() {
    setToken("");
    setUserName("");
    setUserData({});

    navigate("/");
  }

  useEffect(() => {
    async function getTransaction() {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };

      try{
        const response = await axios.get("https://my-wallet726.herokuapp.com/transactions", config);

        setUserData(response.data);
      } catch(err) {
        console.log(err)
      }
    }

    getTransaction();
  }, [token]);

  return(
    <MainContainer>
      <ViewContent>
        <Header>
          <h2>Olá, { userName }</h2>
          <IoExitOutline onClick={ logoutUser } style={{color:"#FFFFFF", cursor: "pointer" }} />
        </Header>
        <History userData={ userData } />
        <InOutButtons>
          <Link to="/new-entrace">
            <DefaultButton>
              <IoMdAddCircleOutline style={{fontSize: "26px", marginBottom: "30px"}} />
              Nova Entrada
            </DefaultButton>
          </Link>
          <Link to="/new-exit">
            <DefaultButton>
              <IoMdRemoveCircleOutline style={{fontSize: "26px", marginBottom: "30px"}} />
              Nova Saída
            </DefaultButton>
          </Link>
        </InOutButtons>
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
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: 24px;
  font-size: 26px;
  font-weight: bold;

  h2 {
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const InOutButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin-top: 14px;

  a {
    width: 48%;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
  }
`;

export default Home;