import React from 'react';
import PropTypes from 'prop-types';

import Grant from './Grants/Grant';

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

const Grants = ({ data }) => (
  <div className="grants-">
    <div className="link-to" id="grants" />
    <div className="title">
      <h3>Grants and Grants</h3>
    </div>
    {data.map((job) => (
      <Grant
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Grants.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
  })),
};

Grants.defaultProps = {
  data: [],
};

export default Grants;
