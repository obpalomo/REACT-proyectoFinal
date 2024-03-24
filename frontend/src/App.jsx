
import { Link, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Films from "./pages/films/Films"
import { useContext, useEffect } from "react"
import { SessionContext } from "./contexts/SessionContext"
import Home from "./pages/Home/Home"
import { useTranslation } from "react-i18next"

function App() {
  const { t, i18n} = useTranslation();
  const { logout, user } = useContext(SessionContext)

  useEffect(() => {

  }, [])

  function changeLang(e){
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <select onChange={changeLang}>
                <option selected={"es" === i18n.language} value="es">Español</option>
                <option selected={"en" === i18n.language} value="en">inglés</option>
                <option selected={"fr" === i18n.language} value="fr">Francés</option>
              </select>
            </li>  
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? '' : <li>
              <Link to="/login">Login</Link>
            </li>}

            {user ? '' : <li>
              <Link to="/signup">Signup</Link>
            </li>}

            {user ? <li>
              <Link to="/films">Films</Link>
            </li> : ''}

            {user ? <button className="btn btn-outline-danger" onClick={logout}>Logout</button> : ''}

          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={user ? <Navigate to="/films"></Navigate> : <Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/films" element={user? <Films></Films> : <Navigate to="/films"></Navigate>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App