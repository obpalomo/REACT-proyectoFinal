import {Navigate, Route, Routes } from "react-router-dom";
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

function App() {
  const { t, i18n } = useTranslation();
  const { logout, user } = useContext(SessionContext);

  useEffect(() => {}, []);

  function changeLang(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
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
    </>
  );
}

export default App;
