import styled from "styled-components";
import MainContainer from "./GenericStyles/MainContainerStyle";
import DefaultButton from "./GenericStyles/DefaultButtonStyle";
import { Link } from "react-router-dom";

function LoginAgainMessage() {

  return (
    <MainContainer style={ { position: "fixed", top: "0", left: "0", zIndex: "1" } }>
      <MessageContainer>
        <TextMessage>Você foi desconectado, é necessário refazer o login</TextMessage>
        <DefaultButton>
          <Link to="/" >Fazer Login</Link>
        </DefaultButton>
      </MessageContainer>
    </MainContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 64%;
`;

const TextMessage = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 30px;
  color: #FFFFFF;
`;

export default LoginAgainMessage;