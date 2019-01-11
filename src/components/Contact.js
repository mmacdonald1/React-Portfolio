import React from 'react'
import {Well, Glyphicon} from 'react-bootstrap'

const Contact = (props) =>{
  return(
    <Well id="contact" >
      <h2> Want to work together? </h2>
      <h2> Lets Chat. </h2>

       <Glyphicon glyph="envelope" />

      <div className="contact-info">
        <h4> Shoot me a message! </h4>
        <h4> Contact Info: </h4>
        <h4> Email: melmacd94@gmail.com </h4>
        <h4> Github: https://github.com/mmacdonald1 </h4>
        <h4> LinkedIn: https://www.linkedin.com/in/melanie-macdonald1/ </h4>
      </div>
    </Well>
  )
}

export default Contact
