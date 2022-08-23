import React from 'react';
import PropTypes from 'prop-types';

const Grant = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.name}</a></h4>
      <p className="year"> {data.year}</p>
      <p className="value"> {data.value}</p>
    </header>
  </article>
);

Grant.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Grant;
