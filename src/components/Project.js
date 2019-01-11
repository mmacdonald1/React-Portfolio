import React,{Component} from 'react'
import {Well, Button} from 'react-bootstrap'

class Project extends Component{
  handleUrl=()=>{
    window.open( this.props.project.url, "_blank")
  }
  handleGit=()=>{
    window.open( this.props.project.githubRepo, "_blank")
  }

  render(){
    return(
      <Well className="project-well">
        <h3>{this.props.project.name}</h3>
        <h4>{this.props.project.technologies}</h4>
        <p>{this.props.project.description}</p>
        <Button className="first-button" onClick={this.handleUrl} bsStyle="success">Live Demo</Button>
        <Button onClick={this.handleGit} bsStyle="success">Github Repo</Button>
      </Well>
    )
  }
}

export default Project
