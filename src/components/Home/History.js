import styled from "styled-components";

function History() {
  return(
    <HistoryContainer>
      <NoTransactionsMessage>Não há registros de entrada ou saída</NoTransactionsMessage>
    </HistoryContainer>
  );
}

const HistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  min-height: 70vh;
  background-color: #FFFFFF;
  border-radius: 6px;
`;

const NoTransactionsMessage = styled.h3`
  width: 60%;
  text-align: center;
  font-size: 20px;
  color: #868686;
`;

export default History;