import { Card, ListGroup, Row, Col } from "react-bootstrap";
import InstrumentosJSON from "../instrumentos.json";

const CardInstrument = () => {
  return (
    <>
      {InstrumentosJSON.instrumentos.map((instrumento, index) => (
        <Card key={index}>
          <Row>
            <Col md={4}>
            <Card.Img src={instrumento.imagen} className="instrument-image" style={{ maxWidth: "200px"}} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{instrumento.instrumento}</Card.Title>
                <Card.Text>{instrumento.descripcion}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Marca: {instrumento.marca}</ListGroup.Item>
                <ListGroup.Item>Modelo: {instrumento.modelo}</ListGroup.Item>
                <ListGroup.Item>Cantidad Vendida: {instrumento.cantidadVendida}</ListGroup.Item>
                <ListGroup.Item>Costo de Envío: {instrumento.costoEnvio === "G" ? "Envio gratis a todo el pais" : `$${instrumento.costoEnvio}`}</ListGroup.Item>
              </ListGroup>
              
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default CardInstrument;