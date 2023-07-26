import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="home">
                        <img src='https://i.ibb.co/khjN0GV/Group-1329.png' alt='website logo' width="170" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="donation">Donation</Nav.Link>
                            <Nav.Link href="events">Events</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                            <Nav.Link href="register" style={{ paddingTop: 0 }}>
                                <Button variant='primary'>Register</Button>
                            </Nav.Link>
                            <Nav.Link href="admin" style={{ paddingTop: 0 }}>
                                <Button variant='dark'>Admin</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;