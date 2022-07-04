import styled from "styled-components";

function History({ userData }) {
  const thereIsUserData = userData.transactions !== undefined && userData.transactions?.length > 0;

  return(
    <HistoryContainer thereIsData={ thereIsUserData }>
      {
        thereIsUserData
        ?
        <>
          <Transactions>
            {
              userData.transactions.map((transaction, index) => {
                return (
                  <Transaction key={ index } status={ transaction.type }>
                    <span>{transaction.date}</span> 
                    <TransactionDescripton>{transaction.description}</TransactionDescripton> 
                    <span>{transaction.value}</span>
                  </Transaction>
                );
              })
            }
          </Transactions>
          <TotalTransations totalStatus={ userData.totalTransactions }>
            <span>Saldo</span>
            <span>{userData.totalTransactions}
          </span></TotalTransations>
        </>
        :
        <NoTransactionsMessage>Não há registros de entrada ou saída</NoTransactionsMessage>
      }
    </HistoryContainer>
  );
}

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${ ({ thereIsData }) => thereIsData ? "space-between" : "center"};
  align-items: center;
  width: 92%;
  height: 70vh;
  color: black;
  background-color: #FFFFFF;
  border-radius: 6px;
  `;

const Transactions = styled.ul`
  width: 100%;
  padding: 12px;
  max-height: 90%;
  overflow-y: scroll;
  `;

const Transaction = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-size: 16px;
  
  span:first-child {
    color: #C6C6C6
  }
  
  span:last-child {
    color: ${({ status }) => status === "entrace" ? "#03AC00" : "#C70000"}
  }
`;

const TransactionDescripton = styled.span`
  width: 66%;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  `;

const TotalTransations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  
  span:first-child {
    font-weight: bold;
  }
  
  span:last-child {
    color: ${({ totalStatus }) => Number(totalStatus) >= 0 ? "#03AC00" : "#C70000"};
  }
`;

const NoTransactionsMessage = styled.h3`
  width: 60%;
  text-align: center;
  font-size: 20px;
  color: #868686;
`;

export default History;