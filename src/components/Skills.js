import React from 'react'
import {Well, ProgressBar} from 'react-bootstrap'

const Skills = (props) =>{
  return(
    <Well>
      <h3> Skills </h3>
      <div>
        <h4> React: </h4>
        <ProgressBar bsStyle="success" now={80} />
        <h4> Rails: </h4>
        <ProgressBar bsStyle="info" now={60} />
      </div>
    </Well>
  )
}

export default Skills
