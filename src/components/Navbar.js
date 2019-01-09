import React from 'react'
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'

const NavBar = (props) => {
  return(
    <Navbar inverse collapseOnSelect className="navbar-container">
      <Navbar.Header>
        <Navbar.Brand>
          <a>
            <Glyphicon glyph="home" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

         <Nav pullLeft>
           <NavItem href="#projects">
             Projects
           </NavItem>
         </Nav>
         <Nav pullLeft>
           <NavItem href="#skills">
             Skills
           </NavItem>
         </Nav>
         <Nav pullLeft>
           <NavItem href="#about">
             About
           </NavItem>
         </Nav>
         <Nav pullLeft>
           <NavItem href="#contact">
             Contact
           </NavItem>
         </Nav>

     </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
