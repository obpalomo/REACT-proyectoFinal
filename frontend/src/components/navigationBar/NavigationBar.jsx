import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import { useContext } from "react";

function NavigationBar() {
  const { logout, user } = useContext(SessionContext);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {user ? (
              <Link to="/films" className="nav-link">
                Films
              </Link>
            ) : (
              ""
            )}
            {user ? (
              ""
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
            {user ? (
              ""
            ) : (
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            )}
              <Link to="/añadir-pelicula" className="nav-link">
                Insert film
              </Link>

              {user ? <button className="btn btn-outline-danger" onClick={logout}>Logout</button> : ''}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
