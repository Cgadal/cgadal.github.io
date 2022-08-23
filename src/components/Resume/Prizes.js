import React from 'react';
import PropTypes from 'prop-types';

import Prize from './Prizes/Grant';

// const Prizes = ({ data }) => (
//   <div className="prizes">
//     <div className="link-to" id="prizes" />
//     <div className="title">
//       <h3>Grants and Prizes</h3>
//     </div>
//     {data.map((job) => (
//       <Grant
//         data={job}
//         key={job.company}
//       />
//     ))}
//   </div>
// );

const Prizes = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="prizes & awards -" />
    <div className="title">
      <h3>Prizes & Awards</h3>
    </div>
    {data.map((job) => (
      <Prize
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Prizes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
  })),
};

Prizes.defaultProps = {
  data: [],
};

export default Prizes;
