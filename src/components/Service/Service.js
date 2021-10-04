import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import './Service.css'

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./mediData.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="services">
        <h1>Take to Make Yourself !</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
         {
           services.map(service => <Courses key={service.id} service={service}></Courses>)
         }
        </div>
      </div>
      </div>
    </>
  );
};

export default Service;
