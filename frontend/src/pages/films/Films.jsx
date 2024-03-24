/* import {useContext} from "react"
import {SessionContext} from "../../contexts/SessionContext"
import axios from "axios"

export default function Films(){
    const {user} = useContext(SessionContext)

    axios.get(`http://localhost:3000/api/films?token=${user.token}`)
    .then
    .catch
    return(
        <>
            <h2>Películas</h2>
        </>
    )
} */

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../contexts/SessionContext";

export default function Films() {
    const { user } = useContext(SessionContext);
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/films?token=${user.token}`);
                setFilms(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchFilms();

        // Clean up function to cancel the request if the component unmounts or the token changes
        return () => {
            // Cancel the request or perform any cleanup if needed
        };
    }, [user.token]); // Run effect whenever user.token changes

    return (
        <>
            <h2>Películas</h2>
            {error && <p>Error: {error.message}</p>}
            <ul>
                {films.map(film => (
                    <li key={film.id}>
                        <h3>{film.title}</h3>
                        <img src={film.image} alt="" />
                        <p>Año: {film.year}</p>
                        <p>Duración: {film.duration} minutos</p>
                        
                        {/* Puedes agregar más detalles de la película aquí */}
                    </li>
                ))}
            </ul>
        </>
    );
}