import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'; 
import logo from "../assets/logo.png"; // Importing the logo image

/**
 * NavBar component utilizing react-bootstrap for styling and layout.
 * It provides navigation links to different parts of the application.
 */
const NavBar = () => {
  return (
    // The Navbar is fixed to the top of the viewport, expanding on medium devices and larger.
    <Navbar expand="md" fixed="top">
      <Container>
        {/* Navbar brand/logo section */}
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" /> {/* Displaying the logo with an alt text for accessibility */}
        </Navbar.Brand>

        {/* Toggle button for collapsed navbar menu on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navbar menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links aligned to the right (ml-auto for margin-left: auto) */}
          <Nav className="ml-auto">
            {/* Each Nav.Link uses the 'as' prop to render a React Router 'Link', enabling SPA navigation */}
            <Nav.Link as={Link} to="/">
              <i className="fas fa-home"></i>Home {/* Home link with an icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              <i className="fas fa-sign-in-alt"></i>Sign in {/* Sign in link with an icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              <i className="fas fa-user-plus"></i>Sign up {/* Sign up link with an icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
