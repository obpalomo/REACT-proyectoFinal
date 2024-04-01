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
import { Container, Row } from "react-bootstrap";
import Item from "../../components/item/item";

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

        return () => {
        };
    }, [user.token]);

    return (
        <>
            <h2>Films</h2>
            {error && <p>Error: {error.message}</p>}
            <Container>
                <Row>
                    {films.map((i)=> (
                        <Item item={i}></Item>
                    ))}
                </Row>
                <Row>🗑️</Row>
            </Container>
        </>
    );
}