import React from 'react';
import { Link } from 'react-router-dom';


import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Main from '../layouts/Main';

import slides from '../data/gallery';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const [index, setIndex] = React.useState(-1);

const Gallery = () => (
  <Main
    title="Gallery"
    description="Gallery"
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Gallery</Link></h2>
          <p>
            Videos and photos linked to my research (ask for permission before use).
          </p>
        </div>
      </header>
      <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

    </article>
  </Main>
);

export default Gallery;
