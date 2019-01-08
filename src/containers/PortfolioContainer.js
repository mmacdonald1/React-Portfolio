import React,{Component} from 'react'
import Project from '../components/Project'

class PortfolioContainer extends Component{
  state={
    projects: [{name:"Hustler", technologies:"React, Redux, Thunk, Router, Rails, Postgresql", description:"A notecard creating and quizzing app", url:"", githubRepo:"https://github.com/mmacdonald1/hustler-frontend"},{name:"Rails Cookbook", technologies:"Rails", description:"A personal cookbook app", url:"", githubRepo:"https://github.com/mmacdonald1/rails-cookbook"}, {name:"Leg Work", technologies:"MySQL, Sequelize, Passport, Handlebars, Node, JavaScript, Bootstrap", description:"An application manager to help ease the job search process", url:"https://legwork.herokuapp.com/", githubRepo:"https://github.com/mmacdonald1/Leg-Work"}]
  }
  render(){
    return(
      <div className="project-container">
        {this.state.projects.map((project, index) => <Project key={index} project={project}/>)}
      </div>
    )
  }
}

export default PortfolioContainer
