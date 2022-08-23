import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h2><a href={data.link}>{data.title}</a></h2>
      </header>
      <pex1>{data.content}</pex1>
      <p> </p>
      <pex1>
        <h3> Methods & Propsects</h3>
        <ul className="points">
          {data.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </pex1>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
