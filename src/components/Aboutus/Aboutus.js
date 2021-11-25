import React, { useEffect, useState } from "react";
import "./Aboutus.css";

const Aboutus = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    fetch("./obj.JSON")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);
  return (
    <>
      <h1 className="yoga">YOGA MEANS HAPPINESS !</h1>
      <div className="about">
        <img src={about.img2} alt="" />
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          laudantium !
        </h1>
      </div>
      <div className="last">
        <img src={about.img1} alt="" />
        <div className="about-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          corrupti voluptates aliquid debitis dicta soluta impedit obcaecati non
          in beatae dolorum a commodi ratione laboriosam animi ea nisi
          architecto nulla, dignissimos, quidem delectus nihil quasi quae?
          Doloribus quasi, rem aspernatur cum deleniti, modi maiores deserunt
          voluptatem fuga officiis aut libero! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloremque corrupti voluptates aliquid
          debitis dicta soluta impedit obcaecati non in beatae dolorum a commodi
          ratione laboriosam animi ea nisi architecto nulla, dignissimos, quidem
          delectus nihil quasi quae? Doloribus quasi, rem aspernatur cum
          deleniti, modi maiores deserunt voluptatem fuga officiis aut libero!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          corrupti voluptates aliquid debitis dicta soluta impedit obcaecati non
          in beatae
        </div>
      </div>
    </>
  );
};

export default Aboutus;
