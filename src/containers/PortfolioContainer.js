import React,{Component} from 'react'
import Project from '../components/Project'

class PortfolioContainer extends Component{
  state={
    projects: [{name:"Hustler", technologies:"React, Redux, Redux Thunk, React Router, Rails, Postgresql", description:"A notecard creating and quizzing app", url:"https://hustler-frontend.herokuapp.com/", githubRepo:"https://github.com/mmacdonald1/hustler-frontend"},{name:"Github API Project", technologies:"React, ReactStrap", description:"A simple UI to find Github profile information", url:"https://mmacdonald1.github.io/Github-API-Project/", githubRepo:"https://github.com/mmacdonald1/Github-API-Project"}, {name:"Leg Work", technologies:"MySQL, Sequelize, Passport, Handlebars, Express, Node, JavaScript, Bootstrap", description:"An application manager to help ease the job search process", url:"https://legwork.herokuapp.com/", githubRepo:"https://github.com/mmacdonald1/Leg-Work"}]
  }
  render(){
    return(
      <div id="projects">
        <h1>My Work</h1>
        <p> Just a heads up! Projects hosted on heroku take longer to load. </p>
        <div className="project-container">
          {this.state.projects.map((project, index) => <Project key={index} project={project}/>)}
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
