import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publication/Publication';

const MinorContributions = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="publications -" />
    <div className="title">
      <h3 style={{ textAlign: 'center' }}>Minor contributions</h3>
    </div>
    {data.map((job) => (
      <Publication
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

MinorContributions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    author_list: PropTypes.string,
    journal: PropTypes.string,
    ref: PropTypes.string,
    doi_link: PropTypes.string,
  })),
};

MinorContributions.defaultProps = {
  data: [],
};

export default MinorContributions;
