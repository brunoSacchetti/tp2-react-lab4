import { Container, Nav, Navbar } from "react-bootstrap"

export const NavBarMenu = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/donde-estamos">Donde estamos</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
