import React from 'react'
import {Well, ProgressBar} from 'react-bootstrap'

const Skills = (props) =>{
  return(
    <Well id="skills" className="well-container">
      <h3 className="well-title"> Skills: </h3>
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
