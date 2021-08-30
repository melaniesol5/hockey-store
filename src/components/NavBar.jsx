import '../css/Navbar.css';
import {Navbar, Container, Col, Row, Nav, NavDropdown} from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from '../logo.jpg';
export default function NavBar(){
    return (
        <>
        <Navbar.Brand href="#home">
        <div style={{ width:"250px", display:"inline-block", textAlign:"center" }}>
          <img src={logo} alt="logo" width="374px" />
        </div>
        </Navbar.Brand>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className=" me-auto" style={{ maxHeight: '400px' }}>
                <NavDropdown title="PALOS" id="collasible-nav-dropdown">
                    <Row>
                        <Col xs={4} lg={12}><NavDropdown.Item href="#palos/adidas">ADIDAS</NavDropdown.Item></Col>
                        <Col xs={4} lg={12}><NavDropdown.Item href="#palos/bravo">BRAVO</NavDropdown.Item></Col>
                        <Col xs={4} lg={12}><NavDropdown.Item href="#palos/dita">DITA</NavDropdown.Item></Col>
                    </Row>
                    <Row>
                        <Col xs={4}  lg={12}><NavDropdown.Item href="#palos/tk">TK</NavDropdown.Item></Col>
                        <Col xs={4}  lg={12}><NavDropdown.Item href="#palos/malik">MALIK</NavDropdown.Item></Col>
                        <Col xs={4} lg={12}><NavDropdown.Item href="#palos/osaka">OSAKA</NavDropdown.Item></Col>
                    </Row>
                    <Row>
                    <Col xs={4} lg={12}><NavDropdown.Item href="#palos/grays">GRAYS</NavDropdown.Item></Col>
                    <Col xs={4} lg={12}><NavDropdown.Item href="#palos/ritual">RITUAL</NavDropdown.Item></Col>
                    <Col xs={4} lg={12}><NavDropdown.Item href="#palos/vlack">VLACK</NavDropdown.Item></Col>
                    </Row>
                    
                </NavDropdown>
                <NavDropdown title="FUNDAS" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#fundas/grandes">GRANDES</NavDropdown.Item>
                    <NavDropdown.Item href="#fundas/medianas">MEDIANAS</NavDropdown.Item>
                    <NavDropdown.Item href="#fundas/jr">JUNIOR</NavDropdown.Item>
                    <NavDropdown.Item href="#fundas/mochilas-y-bolsos">MOCHILAS y BOLSOS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#calzado">CALZADO</Nav.Link>
                <NavDropdown title="ACCESORIOS" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#accesorios/bochas">BOCHAS</NavDropdown.Item>
                    <NavDropdown.Item href="#accesorios/canilleras">CANILLERAS</NavDropdown.Item>
                    <NavDropdown.Item href="#accesorios/grips-y-covers">GRIPS Y COVERS</NavDropdown.Item>
                    <NavDropdown.Item href="#accesorios/guantes">GUANTES</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="INDUMENTARIA" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#indumentaria/calzas">CALZAS</NavDropdown.Item>
                    <NavDropdown.Item href="#indumentaria/musculosas-y-remeras">MUSCULOSAS Y REMERAS</NavDropdown.Item>
                    <NavDropdown.Item href="#indumentaria/shorts-y-polleras">SHORTS Y POLLERAS</NavDropdown.Item>
                    <NavDropdown.Item href="#indumentaria/tops">TOPS DEPORTIVOS</NavDropdown.Item>
                    <NavDropdown.Item href="#indumentaria/abrigos">ABRIGOS</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#locales">LOCALES</Nav.Link>
                </Nav>
                <Nav><Nav.Link href="#sale">SALE <i className="fas fa-fire-alt"></i></Nav.Link></Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
            </Navbar>
     </>   
    )
}
