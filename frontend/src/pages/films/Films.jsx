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

    const handleDelete = async (filmId) => {
        try {
            await axios.delete(`http://localhost:3000/api/films/${filmId}?token=${user.token}`);
            setFilms(films.filter((film) => film._id !== filmId));
        } catch (error) {
            console.error("Error al eliminar la película:", error);
        }
    };

    return (
        <>
            
            {error && <p>Error: {error.message}</p>}
            <Container>
                <Row>
                    {films.map((i)=> (
                        <Item key={i._id} item={i} onDelete={()=> handleDelete(i._id)}></Item>
                    ))}
                </Row>
            </Container>
        </>
    );
}