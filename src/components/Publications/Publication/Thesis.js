import React from 'react';
import PropTypes from 'prop-types';

const Thesis = ({ data }) => (
  <article className="publication-container">
    <header>
      <h4 className="publication-name"><a className="link-container" href={data.link}>{data.title}</a></h4>
      <p className="author_list">{data.author_list}, ({data.date})</p>
      <p className="references">
        <i>{data.university}</i>, <a className="link-container" href={data.link}>view pdf</a>
      </p>
    </header>
  </article>
);

Thesis.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    author_list: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Thesis;
