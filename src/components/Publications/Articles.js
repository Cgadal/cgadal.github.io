import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publication/Publication';

const Articles = ({ data }) => (
  <div className="education">
    <div className="link-to" id="publications -" />
    <div className="title">
      <h3 style={{ textAlign: 'center' }}>Articles</h3>
    </div>
    <ol reversed>
      {data.map((job) => (
        <li>
          <Publication
            data={job}
            key={job.company}
          />
        </li>
      ))}
    </ol>
  </div>
);

Articles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    author_list: PropTypes.string,
    journal: PropTypes.string,
    ref: PropTypes.string,
    doi: PropTypes.string,
  })),
};

Articles.defaultProps = {
  data: [],
};

export default Articles;
