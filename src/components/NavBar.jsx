import '../css/Navbar.css';
import {Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
export default function NavBar(){
    return (
        <>
        <Link to={`/`}><Navbar.Brand>
        <div style={{ width:"250px", display:"inline-block", textAlign:"center" }}>
          <img src={logo} alt="logo" width="374px" />
        </div>
        </Navbar.Brand></Link>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className=" me-auto" style={{ maxHeight: '400px' }}>
                
               
                <Nav.Link as={Link} to={`/category/1`}>PALOS</Nav.Link>
                <Nav.Link as={Link} to={`/category/2`}>FUNDAS</Nav.Link>
                <Nav.Link as={Link} to={`/category/3`}>CALZADO</Nav.Link>
                <Nav.Link as={Link} to={`/category/4`}>ACCESORIOS</Nav.Link>
                <Nav.Link as={Link} to={`/category/5`}>INDUMENTARIA</Nav.Link>
                <Nav.Link as={Link} to={`/salespoints`}>LOCALES</Nav.Link>
                </Nav>
                <Nav><Nav.Link as={Link} to={`/sales`}>SALE <i className="fas fa-fire-alt"></i></Nav.Link></Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
            </Navbar>
     </>   
    )
}
