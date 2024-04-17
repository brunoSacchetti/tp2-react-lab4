
import Instrumento from "../entities/Intrumentos";
import { useEffect, useState } from "react";
import { getAllInstrumentos } from "../services/fetch"; 
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "../css/productos.css"
import { Link } from "react-router-dom";
export const Productos = () => {
  
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

    const getInstrumentos =  async () => {
      const datos:Instrumento[] = await getAllInstrumentos
      ();
      setInstrumentos(datos);
    }

    useEffect(() => {
      getInstrumentos();
    }, []);


  return (

<>
  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    {instrumentos.map((instrumento: Instrumento, index) => (
      <Card key={index} className="m-auto mb-4 instrument-card" style={{ width: "30%" }}>
        <Row>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Card.Img
              src={"img/" + instrumento.imagen}
              className="instrument-image"
              style={{ maxWidth: "200px" }}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{instrumento.instrumento}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ fontWeight: "bold", fontSize: "30px" }}>
                ${instrumento.precio}
              </ListGroup.Item>
              <ListGroup.Item style={{ color: instrumento.costoEnvio === "G" ? "green" : "orange" }}>
                {instrumento.costoEnvio === "G" ? "Envío gratis a todo el país" : "Costo de envío interior de Argentina: $" + instrumento.costoEnvio}
              </ListGroup.Item>
              <ListGroup.Item>
                {instrumento.cantidadVendida} vendidas
                
              </ListGroup.Item>
              <Link to={"/detalle/" + instrumento.id}>
                  <Button>Ver Detalle</Button>
                </Link>
            </ListGroup>
          </Col>
        </Row>
      </Card>
      
    ))}
  </div>
</>
);
};
