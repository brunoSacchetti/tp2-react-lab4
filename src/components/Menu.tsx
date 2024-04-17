import { Carousel } from "react-bootstrap";

export const Menu = () => {
  return (
    <>
      <h1  style={{textAlign:'center',color:'blue' }}>MUSICAL HENDRIX</h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-gray">
              <img
                className="d-block mx-auto"
                src="img/nro4.jpg"
                alt="First slide"
                style={{ width: "500px", height: "auto" }}
              />
            </div>
          </div>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-gray">
              <img
                className="d-block mx-auto"
                src="img/nro2.jpg"
                alt="Second slide"
                style={{ width: "500px", height: "auto" }}
              />
            </div>
          </div>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-gray">
              <img
                className="d-block mx-auto"
                src="img/nro1.jpg"
                alt="Third slide"
                style={{ width: "500px", height: "auto" }}
              />
            </div>
          </div>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p style={{textAlign:'center', fontSize:'30px', margin:'30px'}}>
      Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de
experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las
mejores elecciones para tu compra musical.
      </p>
    </>
  );
};