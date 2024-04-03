import {
  Alert,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import DeleteFilm from "../deleteFilm/DeleteFilm";

export default function Item({ item, onDelete }) {

  const handleDelete = (filmId) => {
    onDelete(filmId)
  }
  return (
    <>
      <Card className="mx-3 my-3 pt-2 pb-3" style={{ width: "18rem"}}>
        <CardImg
          height={200}
          variant="top"
          src={item.image}
          width={50}
        ></CardImg>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            {item.category}
          </CardSubtitle>
          <ListGroup className="list-group-flush" style={{margin:0, padding:0}}>
            <ListGroupItem>{item.year}</ListGroupItem>
            <ListGroupItem>{item.director}</ListGroupItem>
          </ListGroup>
        </CardBody>
        <DeleteFilm filmId={item._id} onDelete={handleDelete}></DeleteFilm>
      </Card>
    </>
  );
}
