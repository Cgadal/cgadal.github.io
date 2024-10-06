import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import ShortCell from '../components/Projects/ShortCell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Research projects"
    description="Learn about Cyril Gadal's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Research projects</Link></h2>
          <p>An overview of my current research projects</p>
        </div>
      </header>
      <div className="minipost-container">
        {data.map((project) => (
          <ShortCell
            data={project}
            key={project.shorttitle}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
