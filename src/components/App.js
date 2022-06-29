import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./Login/LoginView";
import SignupView from "./Signup/SignupView";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginView /> } />
          <Route path="/sign-up" element={ <SignupView /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;