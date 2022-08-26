import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Gallery = () => (
  <Main
    title="Gallery"
    description="Gallery"
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Gallery</Link></h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Gallery;
