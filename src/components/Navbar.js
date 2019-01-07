import React from 'react'
import {Navbar, NavItem, Glyphicon} from 'react-bootstrap'

const NavBar = (props) => {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">
            <Glyphicon glyph="home" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <NavItem href="#">
          Link
        </NavItem>
        <NavItem href="#">
          Link
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
