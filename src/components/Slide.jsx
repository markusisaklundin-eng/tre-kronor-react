import React from 'react';
import {Link} from 'react-router-dom';

const Slide = (props) => {
  const { title, subtitle, price, linkText, type, targetPath } = props.data;
  
  return (
    <div className={`slide ${type}`}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {price && <p><b>{price}</b></p>}
      
      <Link to={targetPath} className="slide-link">
        {linkText}
      </Link>
    </div>
  );
};

export default Slide;