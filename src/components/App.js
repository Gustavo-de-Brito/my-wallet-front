import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogonView from "./Logon/LogonView";
import LoginView from "./Login/LoginView";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LogonView /> } />
          <Route path="/login" element={ <LoginView /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;