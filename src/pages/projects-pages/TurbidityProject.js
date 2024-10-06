import React from 'react';

import Main from '../../layouts/Main';

import Cell from '../../components/Projects/Cell';
import data from '../../data/projects';

const project = data[1];

const TurbidityProject = () => (
  <Main
    title="Research projects"
    description="Learn about Cyril Gadal's projects."
  >
    <article className="post" id="turbidity-project">
      <div className="minipost-container">
        <Cell
          data={project}
          key={project.shorttitle}
        />
      </div>
    </article>
  </Main>
);

export default TurbidityProject;
