import React from 'react'
import {Well, ProgressBar} from 'react-bootstrap'

const Skills = (props) =>{
  return(
    <Well id="skills" className="well-container">
      <h3 className="well-title"> Skills: </h3>
      <div>
        <h4> React: </h4>
        <ProgressBar bsStyle="info" now={90} />
        <h4> Rails: </h4>
        <ProgressBar bsStyle="warning" now={70} />
        <h4> SQL: </h4>
        <ProgressBar bsStyle="danger" now={70} />
        <h4> Node: </h4>
        <ProgressBar bsStyle="primary" now={50} />
        <h4> Mongo: </h4>
        <ProgressBar bsStyle="success" now={50} />
      </div>
    </Well>
  )
}

export default Skills
