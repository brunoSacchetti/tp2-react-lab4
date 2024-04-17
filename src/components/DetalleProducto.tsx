import { useEffect, useState } from "react";
import Instrumento from "../entities/Intrumentos";
import { getIntrumentoById } from "../services/fetch";
import { useParams } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

export const DetalleProducto = () => {


    const {idproducto} = useParams();
    const [instrumento, setInstrumentos] = useState<Instrumento>();
    const getInstrumentoId = async () => {
        const seleccionado:Instrumento = await getIntrumentoById(Number(idproducto));
        setInstrumentos(seleccionado);
    }
    useEffect(() => {
      getInstrumentoId();
    }, []);

    return (
      <>
        {instrumento && ( // Verificar si instrumento está definido antes de renderizar el componente
          <Card className="m-auto mb-4 instrument-card" style={{ width: "30%" }}>
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
                  <Button>Ver Detalle</Button>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        )}
      </>
    );
  }