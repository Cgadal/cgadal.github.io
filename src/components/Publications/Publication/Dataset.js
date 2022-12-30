import React from 'react';
import PropTypes from 'prop-types';

const Dataset = ({ data }) => (
  <article className="publication-container">
    <header>
      <h4 className="publication-name"><a className="link-container" href={`https://doi.org/${data.doi}`}>{data.title}</a></h4>
      <p className="author_list">{data.author_list}, ({data.date})</p>
      <p className="references">
        <i>{data.repository}</i>, <a className="link-container" href={`https://doi.org/${data.doi}`}>doi:{data.doi}</a>
      </p>
    </header>
  </article>
);

Dataset.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    author_list: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    doi: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dataset;
