import React from 'react'
import {Well, Button} from 'react-bootstrap'

const Project = (props) => {
  return(
    <Well className="project-well">
      <h3>{props.project.name}</h3>
      <h4>{props.project.technologies}</h4>
      <p>{props.project.description}</p>
      <Button href={props.project.url} bsStyle="primary">Live Demo</Button>
      <Button href={props.project.githubRepo} bsStyle="primary">Github Repo</Button>
    </Well>
  )
}

export default Project
