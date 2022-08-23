import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Cyril Gadal"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          Feel free to get in touch. You can email me at <a href="mailto:cyril.gadal@imft.fr">cyril.gadal@imft.fr</a>,
          or directly shoot me a DM on <a href="https://twitter.com/CyrilGadal">Twitter</a>.
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
