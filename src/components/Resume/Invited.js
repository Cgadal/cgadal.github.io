import React from 'react';
import PropTypes from 'prop-types';

import Invited from './Invited/Invited';

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

const Inviteds = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="invited contributions -" />
    <div className="title">
      <h3>Invited Contributions</h3>
    </div>
    <ol reversed>
      {data.map((job) => (
        <Invited
          data={job}
          key={job.company}
        />
      ))}
    </ol>
  </div>
);

Inviteds.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
  })),
};

Inviteds.defaultProps = {
  data: [],
};

export default Inviteds;
