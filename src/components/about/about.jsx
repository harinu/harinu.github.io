import React from 'react';
import './about.css';
import AboutImg1 from "../../assets/AvatarMaker1.svg";
import AboutImg01 from "../../assets/work/hp.jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className='about__container grid'>
        <img src={AboutImg01} alt="" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            <span style={{fontSize: "1.20rem", fontWeight: "300", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>
           Hello! I am Hari Priya Kandasamy, a Software Engineer specializing in Large Language Models (LLMs), search, information retrieval, and Retrieval-Augmented Generation (RAG). I am currently located in Sunnyvale, CA, where I'm building a generative LLM-powered assistant for conversational data discovery and designed scalable lineage tracing systems. Previously, I conducted machine learning research at the AI Health Lab, University of Texas at Austin, developing ViT-based models for clinical datasets and predictive patient outcome forecasting. I have a background in Data Science and hold a Master's in Information Science from The University of Texas at Austin. My passion lies in developing scalable AI-driven solutions that enhance information access and retrieval.
            </span>
            
            <br></br><br />
            <span style={{fontSize: "1.25rem", fontWeight: "300",fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", color: "white"}}>
            Outside of work, I enjoy playing softball, reading and exploring new hobbies
            </span>
            </p>


            <div className="spacer__bottom">
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1JzyS7fAp7mfZDhDXB5wfCOv5-SYE9Hit/view?usp=sharing" className="btn">View Resume</a>
            </div>
          </div>
          
        </div>
      </div>
      <h1 className="about__quote">Designing Smarter Search Systems, <span style={{color: "#5fc9e1"}}> Pixel by Pixel, Token by Token</span>.</h1>
    </section>
  )
}

export default About
/*
<span style={{color: "#5fc9e1", fontWeight: "bold"}}>
I'm pursuing my Masters in Information Science at The University of Texas at Austin during my first semester here, where I hope to learn more about different areas of software engineering like UX/UI, Data Science, and product project management.
 I'm pursuing my Master's in Information Science at </span>  <span style={{color: "#5fc9e1", fontWeight: "600",fontSize: "1.25rem" ,fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}> The University of Texas at Austin</span><span style={{fontSize: "1.25rem", fontWeight: "300", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>, where I hope to get an in-depth knowledge in building softwares.
*/