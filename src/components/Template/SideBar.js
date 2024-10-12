import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Cyril Gadal</h2>
        <p>Newton International Research Fellow</p>
        <b style={{ text: 'lowercase', fontSize: '20px' }}>
          <a href="mailto:cyril.gadal@manchester.ac.uk">cyril.gadal[at]manchester.ac.uk</a>
        </b>
      </header>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Cyril Gadal <Link to="/">cgadal.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
