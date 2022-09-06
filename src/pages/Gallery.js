import React from 'react';
import { Link } from 'react-router-dom';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import Main from '../layouts/Main';

import data from '../data/gallery';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

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
      <LightGallery plugins={[lgZoom, lgVideo, lgThumbnail]} mode="lg-fade">
        {(data).map((job) => {
          const testVar = (job.type === 'video/mp4');

          if (testVar) {
            return (
              <a
                key={job._id}
                className="gallery-item"
                data-video={`{"source": [{"src": "${PUBLIC_URL}${job.src}", "type":"${job.type}"}], "attributes": {"preload": false, "controls": true}}`}
                data-sub-html={job.description}
              >
                <img
                  style={{ maxWidth: '100%', width: '400px' }}
                  className="img-responsive"
                  alt=""
                  src={`${PUBLIC_URL}${job.thumb}`}
                />
              </a>);
          }
          return (
            <a
              key={job._id}
              className="gallery-item"
              href={`${PUBLIC_URL}${job.src}`}
              data-sub-html={job.description}
            >
              <img
                style={{ maxWidth: '100%', width: '400px' }}
                className="img-responsive"
                alt=""
                src={`${PUBLIC_URL}${job.thumb}`}
              />
            </a>);
        })}
      </LightGallery>
    </article>
  </Main>
);

export default Gallery;
