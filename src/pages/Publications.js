import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import FirstAuthor from '../components/Publications/FirstAuthor';
import MajorContributions from '../components/Publications/MajorContributions';
import MinorContributions from '../components/Publications/MinorContributions';

import articlesfirst from '../data/publications/first';
import majorcontributions from '../data/publications/major';
import minorcontributions from '../data/publications/minor';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Publications = () => (
  <Main
    title="Publications"
    description="Publication list"
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">PUBLICATIONS</Link></h2>
          <a href={`${PUBLIC_URL}/CV_CyrilGadal_August2022.pdf`} className="download" download="CV_CyrilGadal_August2022">DOWNLOAD FULL PUBLICATION LIST</a>
          <p>  </p>
        </div>
      </header>
      <FirstAuthor data={articlesfirst} />
      <MajorContributions data={majorcontributions} />
      <MinorContributions data={minorcontributions} />

    </article>
  </Main>
);

export default Publications;
