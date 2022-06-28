import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogonView from "./Logon/LogonView";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LogonView /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;