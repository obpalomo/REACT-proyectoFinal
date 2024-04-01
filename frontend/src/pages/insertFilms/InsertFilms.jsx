import axios from "axios";
import FormPelicula from "../../components/formPelicula/FormPelicula";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";

function InsertFilms() {
    const { user } = useContext(SessionContext);
  function insertCard(item) {
    axios
      .post(`http://localhost:3000/api/films?token=${user.token}`, item)
      .then(() => {
        alert("Película añadida correctamente");
      })
      .catch((err) => {
        alert("Error al subir la película");
        console.log(err);
      });
    }
    return (
      <>
        <h2>Insert Film</h2>
        <FormPelicula onInsertCard={insertCard}></FormPelicula>
      </>
    );

}

export default InsertFilms;
