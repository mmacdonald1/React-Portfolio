import {Jumbotron, Button} from 'react-bootstrap'
import React from 'react'

const PortfolioJumbotron = () => {
  return(
    <Jumbotron id="home" className="jumbo-container">
      <h1 className="jumbo-text">Hi I'm Melanie, a Full Stack Developer.</h1>
      <Button bsStyle="primary" href="#contact">Hire Me</Button>
    </Jumbotron>
  )
}

export default PortfolioJumbotron
