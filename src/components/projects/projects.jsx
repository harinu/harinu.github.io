import React from "react";
import "./projects.css";

const projects = [
  {
    title: "Generative LLM-powered Assistant for Snowflake",
    authors: "Hari Priya Kandasamy",
    venue: "Tata Consultancy Services, Sunnyvale, CA",
    link: ""
  },
  {
    title: "ViT-based Chest X-ray Classification",
    authors: "Hari Priya Kandasamy",
    venue: "AI Health Lab, University of Texas at Austin",
    link: ""
  },
  {
    title: "End-to-End ML Pipeline for Colonoscopy Video Diagnostics",
    authors: "Hari Priya Kandasamy",
    venue: "Intuitive Surgical, Sunnyvale, CA",
    link: ""
  }
];

const Projects = () => (
  <div className="projects-section">
    <h2>Projects</h2>
    <ul>
      {projects.map((project, idx) => (
        <li key={idx} className="project-item">
          <strong>{project.title}</strong><br />
          <span>{project.authors}</span><br />
          <span><em>{project.venue}</em></span><br />
          <a href={project.link} target="_blank" rel="noopener noreferrer">Read more</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;