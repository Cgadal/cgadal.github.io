import React from 'react';
import PropTypes from 'prop-types';

const Contributed = ({ data }) => (
  <li>
    <article className="jobs-container">
      <header>
        <i className="name">{data.name}</i>
        <p className="year"> {data.year}</p>
      </header>
    </article>
  </li>
);

Contributed.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    ii: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contributed;
