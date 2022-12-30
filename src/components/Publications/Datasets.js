import React from 'react';
import PropTypes from 'prop-types';

import Dataset from './Publication/Dataset';

const Datasets = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="publications -" />
    <div className="title">
      <h3 style={{ textAlign: 'center' }}>Datasets</h3>
    </div>
    <ol reversed>
      {data.map((job) => (
        <li>
          <Dataset
            data={job}
            key={job.company}
          />
        </li>
      ))}
    </ol>
  </div>
);

Datasets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    author_list: PropTypes.string,
    repository: PropTypes.string,
    doi: PropTypes.string,
  })),
};

Datasets.defaultProps = {
  data: [],
};

export default Datasets;
