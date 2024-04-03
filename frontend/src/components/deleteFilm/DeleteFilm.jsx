import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../contexts/SessionContext";


export default function DeleteFilm({filmId, onDelete}){
    const { user } = useContext(SessionContext);
    const handleDelete  = () => {
        axios
        .delete(`http://localhost:3000/api/films/${filmId}?token=${user.token}`)
        .then((response) => {
            onDelete()
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error en el deleteFilm:", error);
        });
    };

    return(
        <>
            <Button variant="dark" onClick={handleDelete}>🗑️</Button>
        </>
    )
}