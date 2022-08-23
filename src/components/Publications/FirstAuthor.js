import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publication/Publication';

const FirstAuthor = ({ data }) => (
  <div className="education">
    <div className="link-to" id="publications -" />
    <div className="title">
      <h3 style={{ textAlign: 'center' }}>First Author</h3>
    </div>
    {data.map((job) => (
      <Publication
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

FirstAuthor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    author_list: PropTypes.string,
    journal: PropTypes.string,
    ref: PropTypes.string,
    doi_link: PropTypes.string,
  })),
};

FirstAuthor.defaultProps = {
  data: [],
};

export default FirstAuthor;
