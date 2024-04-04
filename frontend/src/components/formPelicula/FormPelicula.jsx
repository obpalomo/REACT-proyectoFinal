import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export default function FormPelicula({ onInsertCard }) {
  const INITIAL_STATE = {
    title: "",
    year: "",
    synopsis: "",
    category: "",
    director: "",
    image: "",
  };

  const [dato, setDato] = useState(INITIAL_STATE);

  function cambiarAtributo(e, atributo) {
    setDato({ ...dato, [atributo]: e.target.value });
  }

  function insertar() {
    onInsertCard(dato);
    setDato(INITIAL_STATE);
  }

  return (
    <>
      <Form>
        <Container className="text-white fs-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <FormGroup>
                <FormLabel> Title</FormLabel>
                <FormControl
                  value={dato.title}
                  onChange={(e) => cambiarAtributo(e, "title")}
                  type="text"
                ></FormControl>
              </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <FormGroup>
                <FormLabel>Year</FormLabel>
                <FormControl
                  value={dato.year}
                  onChange={(e) => cambiarAtributo(e, "year")}
                  type="number"
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel>Image</FormLabel>
                <FormControl
                  value={dato.image}
                  onChange={(e) => cambiarAtributo(e, "image")}
                  type="text"
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel>Category</FormLabel>
                <FormControl
                  value={dato.category}
                  onChange={(e) => cambiarAtributo(e, "category")}
                  type="text"
                ></FormControl>
              </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <FormLabel>Director</FormLabel>
                <FormControl
                  value={dato.director}
                  onChange={(e) => cambiarAtributo(e, "director")}
                  type="text"
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel>Synopsis</FormLabel>
                <FormControl
                  value={dato.synopsis}
                  onChange={(e) => cambiarAtributo(e, "synopsis")}
                  type="text"
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button variant="secondary" size="lg" onClick={insertar}>Guardar</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
