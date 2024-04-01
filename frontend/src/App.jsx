import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Films from "./pages/films/Films";
import { useContext, useEffect } from "react";
import { SessionContext } from "./contexts/SessionContext";
import Home from "./pages/Home/Home";
import { useTranslation } from "react-i18next";
import InsertFilms from "./pages/insertFilms/InsertFilms";
import NavigationBar from "./components/navigationBar/NavigationBar";
import { Container } from "react-bootstrap";
import { CookieAcceptContext } from "./contexts/CookieAccetpContext";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const { decision, aceptar, rechazar } = useContext(CookieAcceptContext);
  const { logout, user } = useContext(SessionContext);

  useEffect(() => {}, []);
  if (decision === 2) {
    return (
      <div>
        <h2>Necesitas aceptar las coockies para continuar</h2>
        <button onClick={aceptar}>aceptar</button>
      </div>
    );
  }

  function changeLang(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <div className="App">
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/login"
                element={
                  user ? <Navigate to="/films"></Navigate> : <Login></Login>
                }
              ></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
              <Route
                path="/films"
                element={user ? <Films></Films> : <Navigate to="/"></Navigate>}
              ></Route>
              <Route
                path="/añadir-pelicula"
                element={<InsertFilms></InsertFilms>}
              ></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          {decision === 0 ? (
            <div className="cookie-ask">
              <p>¿Aceptas las cookies?</p>
              <button onClick={aceptar}>Aceptar</button>
              <button onClick={rechazar}>Rechazar</button>
            </div>
          ) : (
            ""
          )}
          Copyright 2023-2024 - FILMS
        </footer>
      </div>
    </>
  );
}

export default App;
