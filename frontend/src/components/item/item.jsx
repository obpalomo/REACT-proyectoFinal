import {
  Alert,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function Item({ item }) {
  return (
    <>
      <Card className="mx-3 my-3 pt-2" style={{ width: "18rem" }}>
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
          <CardText>
            {item.synopsis} <br></br>
          </CardText>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.year}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}
