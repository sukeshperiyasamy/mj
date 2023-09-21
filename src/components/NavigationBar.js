import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import Cart from './Cart';

function BasicExample() {
  return (
    <Navbar expand="lg"   className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h2 className="text-danger" ><span ><i className="bi bi-fingerprint"></i>Mj Sports Wear</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
           
            <Nav.Link href="#Product" className="fw-bold">product</Nav.Link>
            <Nav.Link href="#Deal" className="fw-bold">Deals</Nav.Link>
            <Nav.Link href="#contactus" className="fw-bold">contact us</Nav.Link>
           
            {/* <Nav.Link href="#cart" className="fw-bold"><i class="bi bi-cart3"></i></Nav.Link> */}
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;