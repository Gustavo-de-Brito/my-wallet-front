import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./Login/LoginView";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginView /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;