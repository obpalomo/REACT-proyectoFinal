import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import { useContext } from "react";
import './NavigationBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  const { logout, user } = useContext(SessionContext);

  return (
    <>
      <Navbar className="custom-navbar justify-content-center" >
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white fs-3">
            <FontAwesomeIcon icon={faHouse} />
            </Link>
            {user ? (
              <Link to="/films" className="nav-link text-white fs-3">
                Films
              </Link>
            ) : (
              ""
            )}
            {user ? (
              ""
            ) : (
              <Link to="/login" className="nav-link text-white fs-3">
                Login
              </Link>
            )}
            {user ? (
              ""
            ) : (
              <Link to="/signup" className="nav-link text-white fs-3">
                Signup
              </Link>
            )}
            {user ? (
              <Link to="/añadir-pelicula" className="nav-link text-white fs-3">
                Insert film
              </Link>
            ) : (
              ""
            )}

            {user ? (
              <button className="btn btn-outline-danger" onClick={logout}>
                Logout
              </button>
            ) : (
              ""
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
