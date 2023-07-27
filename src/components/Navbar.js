import React from 'react'
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Link} from 'react-router-dom'

export default function MyNavbar(props) {
    return (
        <Navbar expand="lg" bg={props.mode} data-bs-theme={props.mode}>
            <Container fluid>
                <Navbar.Brand href="#">{props.tittle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                    </Nav>
                    <Form className="d-flex ">
                    <Form>
                            <Form.Check
                                type="switch"
                                onClick={props.red}
                                id="input-red"
                            />
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                onClick={props.green}
                                id="input-green"
                            />
                        </Form>
                        <Form>
                            <Form.Check
                                type="switch"
                                onClick={props.yellow}
                                id="input-yellow"
                            />
                        </Form>
                       <div className="d-flex">
                       <Form>
                            <Form.Check
                                type="switch"
                                onClick={props.togglemode}
                                id="input-black"
                            />
                        </Form>
                        {/* <Form.Label htmlFor="inputPassword5" className={`text-${props.mode === "light" ? "dark" : "light"}`}>
                            {props.mode === "light" ? "Dark mode" : "Light mode"}
                        </Form.Label> */}
                       </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
// propTypes
MyNavbar.propTypes = {
    tittle: PropTypes.string,
}
// defaultProps
MyNavbar.defaultProps = {
    tittle: "Website Name"
}