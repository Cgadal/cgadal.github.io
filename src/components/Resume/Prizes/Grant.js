import React from 'react';
import PropTypes from 'prop-types';

const Prize = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.name}</a></h4>
      <p className="year"> {data.year}</p>
    </header>
  </article>
);

Prize.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Prize;
