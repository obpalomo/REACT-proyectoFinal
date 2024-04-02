import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../contexts/SessionContext";


export default function DeleteFilm({onDelete,filmId}){
    const { user } = useContext(SessionContext);
    const handleDelete  = async() => {
        try{
            await axios.delete(`http://localhost:3000/api/films/${filmId}?token=${user.token}`);
            onDelete(filmId)
        } catch (err){
            console.error("Error", err);
        }
    }

    return(
        <>
            <Button className="btn btn-danger" onClick={handleDelete }>🗑️</Button>
        </>
    )
}