import styled from "styled-components";
import MainContainer from "../Shared/GenericStyles/MainContainerStyle";
import DefaultButton from "../Shared/GenericStyles/DefaultButtonStyle";
import History from "./History";
import { IoExitOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from "react-icons/io"

function Home() {
  return(
    <MainContainer>
      <ViewContent>
        <Header>
          <h2>Olá, nome</h2>
          <IoExitOutline style={{color:"#FFFFFF"}} />
        </Header>
        <History />
        <InOutButtons>
          <DefaultButton>
            <IoMdAddCircleOutline style={{fontSize: "26px", marginBottom: "30px"}} />
            Nova Entrada
          </DefaultButton>
          <DefaultButton>
            <IoMdRemoveCircleOutline style={{fontSize: "26px", marginBottom: "30px"}} />
            Nova Saída
          </DefaultButton>
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
`;

const InOutButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin-top: 14px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    font-size: 16px;
  }
`;

export default Home;