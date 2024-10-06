import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShortCellStyle = { width: '45%', 'min-width': '350px' };

const ShortCell = ({ data }) => (
  <div className="cell-container" style={ShortCellStyle}>
    <article className="mini-post">
      <Link to={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.shorttitle} />
      </Link>
      <header>
        <h3><Link to={data.link}>{data.shorttitle}</Link></h3>
      </header>
    </article>
  </div>
);

ShortCell.propTypes = {
  data: PropTypes.shape({
    shorttitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShortCell;
