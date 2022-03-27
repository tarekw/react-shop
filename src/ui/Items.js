import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export const Items = ({ category, selectItem = (f) => f }) => (
  <Container fluid="sm" style={{ margin: 0 }}>
    <Row>
      {category.map((item, index) => (
        <Card
          style={{ width: "10rem" }}
          className="cardItem"
          onClick={() => selectItem(index)}
          key={item.id}
        >
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Text>{item.title}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  </Container>
);
