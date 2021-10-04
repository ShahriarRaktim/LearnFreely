import React from "react";
import './HomeCourse.css'

const HomeCourse = (props) => {
  const { name, img, price, details } = props.course;
  return (
    <div className='homeCourse'>
      <div className="col">
        <div className="card bg-dark text-white">
          <img src={img} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">{name}</h5>
            <p className="card-text details">
                {details}
            </p>
            <button className='price'>{price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
