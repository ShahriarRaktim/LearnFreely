import React from "react";
import "./Courses.css";

const Courses = (props) => {
  const { name, details, price, img } = props.service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <br />
          <button className="btn">Only {price} !</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
