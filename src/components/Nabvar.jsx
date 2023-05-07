import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <Nav className="Navbar row mx-auto">
        <div className="col-4" >
      <Nav.Item>
        <Nav.Link className="text-white text-decoration-none" href="/">
          Home <span className="icon-navbar">🏡</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  className="text-white text-decoration-none" href="/contacto">
          Contacto <span className="icon-navbar">📒</span>{" "}
        </Nav.Link>
      </Nav.Item>
      </div>
      <Nav.Item className="col-3">
        <Nav.Link  className="text-white text-decoration-none" href="/nosotros">
          Happy Cake <span className="icon-navbar flex-end">🍰</span>{" "}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
