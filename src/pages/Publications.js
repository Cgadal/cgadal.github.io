import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import ThesisTemplate from '../components/Publications/Thesis';
import Articles from '../components/Publications/Articles';
import Datasets from '../components/Publications/Datasets';

import thesis from '../data/publications/thesis';
import articles from '../data/publications/articles';
import datasets from '../data/publications/datasets';

const sections = [
  'Articles -',
  'Datasets -',
  'Thesis',
];

const Publications = () => (
  <Main
    title="Publications"
    description="Publication list"
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2><Link to="resume">PUBLICATIONS</Link></h2>
          <p>  </p>
          <div className="link-container" style={{ 'text-align': 'center' }}>
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Articles data={articles} />
      <Datasets data={datasets} />
      <ThesisTemplate data={thesis} />
    </article>
  </Main>
);

export default Publications;
