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
          <Card className="m-auto mb-4 mt-4 instrument-card" style={{ width: "60%"}}>
            <Row>
              <Col md={4} className="d-flex justify-content-center align-items-center">
                <Card.Img
                  src={"/img/" + instrumento.imagen}
                  className="instrument-image"
                  style={{ maxWidth: "290px" }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{instrumento.instrumento}</Card.Title>
                    <Card.Text>
                      {instrumento.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{ fontWeight: "bold", fontSize: "30px" }}>
                    ${instrumento.precio}
                  </ListGroup.Item>
                <ListGroup.Item>Marca: {instrumento.marca}</ListGroup.Item>
                <ListGroup.Item>Modelo: {instrumento.modelo}</ListGroup.Item>
                  <ListGroup.Item style={{ color: instrumento.costoEnvio === "G" ? "green" : "orange" }}>
                     
                    {instrumento.costoEnvio === "G" && (
                    <img src="/img/camion.png" alt="envio gratis" style={{ width: "20px", marginRight: "5px" }} /> //mostramos la imagen de envio gratis
                    )}
                    
                    {instrumento.costoEnvio === "G" ? "Envío gratis a todo el país" : "Costo de envío interior de Argentina: $" + instrumento.costoEnvio}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {instrumento.cantidadVendida} vendidas
                  </ListGroup.Item>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                      <Button href="" className="btn-block" style={{ backgroundColor: "blue", color: "white", width: "100px", textAlign: "center"}}>Añadir al carrito</Button>
                      <Button href="/productos" className="btn-block p-1" style={{ backgroundColor: "green", color: "white", width: "100px", height: "4vh", textAlign: "center", marginTop: "12px", marginRight: "6px"}}>Volver</Button>
                    </div>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        )}
      </>
    );
  }