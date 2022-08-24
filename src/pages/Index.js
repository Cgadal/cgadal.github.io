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
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p>I am an Geophysicist, specialized in fluid dynamics and granular materials.
        I use a combination of laboratory experiments, numerical simulations and field
        studies to understand the dynamics
        of complex natural systems involving grains and/or fluids, such as dunes, turbidity
        currents or planetary impact craters.
        Currently, I am  a postodoctoral researcher at the
        <a href="https://www.imft.fr/"> Institut de Mécanique des Fluides de Toulouse </a>.
      </p>
      <p> I obtained my PhD in Geophysics in 2020
        from <a href="https://u-paris.fr/en/">Université Paris Cité</a> and
        <a href="https://www.ipgp.fr/fr"> Institut de physique du globe de Paris </a>,
        and my Physics (fluid mechanics) and Earth Sciences Master degrees in 2017 from
        the <a href="https://www.ens.psl.eu/en">Ecole Normale Supérieure of Paris</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/projects') ? <Link to="/projects" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
      <video src={`${PUBLIC_URL}/videos/output.mp4`} width="100%" controls="controls" autoPlay="true" />
    </article>
  </Main>
);

export default Index;
