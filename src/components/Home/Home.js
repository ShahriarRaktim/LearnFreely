import React, { useEffect, useState } from "react";
import HomeCourse from "../HomeCourse/HomeCourse";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./mediHomeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <h1 className="yoga">LIFE IS UNCOMPLETE WITHOUT YOGA !</h1>
      <div className="home">
        {/* home course */}
        <div className="container">
          <div className="row row-cols-2">
            {courses.map((course) => (
              <HomeCourse course={course}></HomeCourse>
            ))}
          </div>
        </div>
        <div>
          <div className="current">
            <h2>Current Teachers 20</h2>
            <h2>Current Students 290</h2>
            <h2>Current Yoga Types 9</h2>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="home-static">
        <h1>A FEW WORDS ABOUT US</h1>
        <p>
          Yoga is a global translation services and Meditaion courses company
          founded in 1999. We aim to deliver quliaty translation and educational
          services for everyone. With a core group of more than 700 professional
          linguists and tutors operating from six continents, we serve the needs
          of our clients worldwide. Whatever your language needs are, we are
          here to help Yoga is a global translation services and Meditaion
          courses company founded in 1999. We aim to deliver quliaty translation
          and educational services for everyone. With a core group of more than
          700 professional linguists and tutors operating from six continents,
          we serve the needs of our clients worldwide. Whatever your language
          needs are, we are here to help Yoga is a global translation services
          and Meditaion courses company founded in 1999. We aim to deliver
          quliaty translation and educational services for everyone. With a core
          group of more than 700 professional linguists and tutors operating
          from six continents, we serve the needs of our clients worldwide.
          Whatever your language needs are, we are here to help Yoga is a global
          translation services and Meditaion courses company founded in 1999. We
          aim to deliver quliaty translation and educational services for
          everyone. With a core group of more than 700 professional linguists
          and tutors operating from six continents, we serve the needs of our
          clients worldwide. Whatever your language needs are, we are here to
          help
        </p>
        <br />
        <button className="price">Learn More</button>
      </div>
    </>
  );
};

export default Home;
