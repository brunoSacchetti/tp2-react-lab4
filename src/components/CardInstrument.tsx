import { Card, ListGroup, Row, Col } from "react-bootstrap";
import instrumentos from "../instrumentos.json";

const CardInstrument = () => {
  return (
    <>
      {instrumentos.instrumentos.map((instrumento, index) => (
        <Card key={index} className="m-auto mb-4" style={{ width: "1000px" }}>
          <Row>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <Card.Img
                src={instrumento.imagen}
                className="instrument-image"
                style={{ maxWidth: "200px" }}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{instrumento.instrumento}</Card.Title>
                {/* <Card.Text>{instrumento.descripcion}</Card.Text> */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <ListGroup.Item>Marca: {instrumento.marca}</ListGroup.Item>
                <ListGroup.Item>Modelo: {instrumento.modelo}</ListGroup.Item> */}
                <ListGroup.Item style={{fontWeight: "bold", fontSize: "30px"}}>${instrumento.precio}</ListGroup.Item>
                <ListGroup.Item style={{ color: instrumento.costoEnvio === "G" ? "green" : "orange" }}>
                {instrumento.costoEnvio === "G" ? "Envio gratis a todo el pais" : "Costo de envio interior de Argentina: " + `$${instrumento.costoEnvio}`}
                </ListGroup.Item>
                <ListGroup.Item>
                  {instrumento.cantidadVendida} vendidas
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default CardInstrument;