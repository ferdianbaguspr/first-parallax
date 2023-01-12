// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import '../style/Styles.css';

function Navigationbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><strong>BERKAH FARM</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='Collapses' id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
                            <Nav className='NavItem'>
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>Product</Nav.Link>
                                <Nav.Link>Contact</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;