import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./theme/globalStyle";
import TokenContext from "./contexts/TokenContext";
import UserNameContext from "./contexts/UserNameContext";
import LoginView from "./Login/LoginView";
import SignupView from "./Signup/SignupView";
import HomeView from "./Home/HomeView";
import NewEntrace from "./NewEntrace/NewEntrace";
import NewExit from "./NewExit/NewExit";

function App() {
  const [ token, setToken ] = useState("");
  const [ userName, setUserName ] = useState("");

  return (
    <TokenContext.Provider value={ { token, setToken } }>
      <UserNameContext.Provider value={ { userName, setUserName } }>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LoginView /> } />
            <Route path="/sign-up" element={ <SignupView /> } />
            <Route path="/home" element={ <HomeView /> } />
            <Route path="/new-entrace" element={ <NewEntrace /> } />
            <Route path="/new-exit" element={ <NewExit /> } />
          </Routes>
        </BrowserRouter>
      </UserNameContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;