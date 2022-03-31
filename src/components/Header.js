import React from 'react'
import { Navbar, Nav , Container, Button, Form, FormControl } from "react-bootstrap";
import {Link} from "react-router-dom";
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import "../styles/NewRecipeForm.css"



function Header() {
  return (
    <Navbar className="header">
        <Container>
            <Link to={"/"}>
                <Navbar.Brand>Food Monger</Navbar.Brand>
            </Link>

            <Link to={"/recipes"}>
                <Navbar.Text>Explore</Navbar.Text>
            </Link>

            {/* <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button className="btn-custom" >Search</Button>
            </Form> */}

            <Link to={"/create"}>
                <Button className="btn-custom" > Create Recipe </Button>
            </Link>
        </Container>
    </Navbar>
  )
}

export default Header