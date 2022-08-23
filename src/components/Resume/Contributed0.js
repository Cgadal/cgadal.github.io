import React from 'react';
import PropTypes from 'prop-types';

import Contributed from './Contributed/Contributed';

// const Grants = ({ data }) => (
//   <div className="Grants">
//     <div className="link-to" id="Grants" />
//     <div className="title">
//       <h3>Grants and Grants</h3>
//     </div>
//     {data.map((job) => (
//       <Grant
//         data={job}
//         key={job.company}
//       />
//     ))}
//   </div>
// );

const Contributeds = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="contributed talks -" />
    <div className="title">
      <h3>Contributed Talks</h3>
    </div>
    <ol reversed>
      {data.map((job) => (
        <Contributed
          data={job}
          key={job.company}
        />
      ))}
    </ol>
  </div>
);

Contributeds.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
  })),
};

Contributeds.defaultProps = {
  data: [],
};

export default Contributeds;
