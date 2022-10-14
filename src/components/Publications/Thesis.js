import React from 'react';
import PropTypes from 'prop-types';

import Thesis from './Publication/Thesis';

const ThesisTemplate = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="publications -" />
    <div className="title">
      <h3 style={{ textAlign: 'center' }}>PhD thesis</h3>
    </div>
    {data.map((job) => (
      <Thesis
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

ThesisTemplate.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    author_list: PropTypes.string,
    university: PropTypes.string,
    link: PropTypes.string,
  })),
};

ThesisTemplate.defaultProps = {
  data: [],
};

export default ThesisTemplate;
