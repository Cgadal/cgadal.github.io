import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={"Cyril Gadal's website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome !</Link></h2>
        </div>
      </header>
      <p>I am a physicist, specialized in fluid dynamics and granular materials, and mostly
        interested in environmental/natural systems. I use a combination of theory, laboratory
        experiments, numerical simulations and field studies to understand the dynamics of
        complex natural systems involving grains and/or fluids, such as dunes, avalanches, rivers
        or turbidity currents.
      </p>
      <p> Currently, I am a research fellow at the <a href="https://www.manchester.ac.uk/"> University of Manchester</a>.
        Before, I used to be a PhD student at the
        <a href="https://www.ipgp.fr/fr"> Institut de physique du globe de Paris</a> and then a
        postdoctoral researcher at the <a href="https://www.imft.fr/"> Institut de Mécanique des Fluides de Toulouse </a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/projects') ? <Link to="/projects" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
      <video src={`${PUBLIC_URL}/videos/stationnary_turbidity_current.mp4`} width="100%" controls="controls" autoPlay />
    </article>
  </Main>
);

export default Index;
