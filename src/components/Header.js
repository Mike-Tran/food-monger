import React from 'react'
import { Navbar, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
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

            <Link to={"/create"}>
                <Button className="btn-custom" > Create Recipe </Button>
            </Link>
        </Container>
    </Navbar>
  )
}

export default Header