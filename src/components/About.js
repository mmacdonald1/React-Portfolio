import React from 'react'
import {Well} from 'react-bootstrap'

const About = (props) =>{
  return(
    <Well id="about" className="well-container">
      <h3 className="well-title"> Who am I? </h3>

      <img className="portfolio-pic" alt="Melanie's Portrait" src="https://avatars1.githubusercontent.com/u/27786743?s=460&v=4" />
      <h5> I am close to reaching my two-year code-anniversary! April 2017 I quit my sales job and used all my earnings to buy my first online course in Front-end Development and Web Design. I spent the next 4 months speeding through HTML and CSS eventually hitting my first JavaScript wall. So I signed up for my first boot camp that was completely JavaScript front to back.
      </h5>
      <h5> After graduating in January 2018, I took on a small freelance job, a code based teaching position for high schoolers, and I continued to self-teach. When I joined Flatiron school, I was given three weeks to take on Ruby, Sinatra, and Rails. They started me with building CRUD apps in Sinatra and Rails and then I moved into learning more about Ruby. Along the way I also dove deeper into the inner workings of JavaScript and took on new tools in React. I have found that my hunger for building apps with these new tools is growing so I am now looking for new opportunities!
      </h5>
    </Well>
  )
}

export default About
