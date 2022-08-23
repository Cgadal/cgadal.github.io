import React from 'react';
import PropTypes from 'prop-types';

const Invited = ({ data }) => (
  <li>
    <article className="jobs-container">
      <header>
        <i><a href={data.link}>{data.name}</a></i>
        <p className="year"> {data.year}</p>
        <p className="value"> {data.value}</p>
      </header>
    </article>
  </li>
);

Invited.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Invited;
