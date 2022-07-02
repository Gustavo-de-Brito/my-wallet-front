import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginView from "./Login/LoginView";
import SignupView from "./Signup/SignupView";
import GlobalStyle from "./theme/globalStyle";
import TokenContext from "./contexts/TokenContext";

function App() {
  const [ token, setToken ] = useState("");

  return (
    <TokenContext.Provider value={ { token, setToken } }>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginView /> } />
          <Route path="/sign-up" element={ <SignupView /> } />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;