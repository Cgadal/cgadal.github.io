import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Cyril Gadal</h2>
        <p>Postdoctoral researcher,</p>
        <b style={{ text: 'lowercase', fontSize: '20px', color: '#1E90FF' }}>
          Contact: <a href="mailto:cyril.gadal@imft.fr">cyril.gadal@imft.fr</a>
        </b>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Cyril Gadal <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
