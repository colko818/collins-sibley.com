import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">GAELLE COLLINS-SIBLEY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">PEOPLE</Nav.Link>
                    <Nav.Link href="#link">PLACES</Nav.Link>
                    <Nav.Link href="#link">THINGS</Nav.Link>
                    <Nav.Link href="#link">PHOTO BLOG</Nav.Link>
                    <Nav.Link href="#link">BUS BLOG</Nav.Link>
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;