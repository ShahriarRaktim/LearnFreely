import React, { useEffect, useState } from "react";
import "./Success.css";

const Success = () => {
  const [success, setSuccess] = useState({});
  useEffect(() => {
    fetch("./about.JSON")
      .then((res) => res.json())
      .then((data) => setSuccess(data));
  }, []);
  return (
    <>
      <h1 className="yoga">Students who completed our course !</h1>
      <div className="success">
        <img src={success.img1} alt="" />
        <div>
          <h1>I am Mark !</h1>
          <p>
            This course makes me very strong. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsum officia nam quis cum dignissimos
            ex architecto dolorem officiis dolor harum esse alias ea, error
            culpa velit quam? Quos, provident! Culpa! architecto dolorem
            officiis dolor harum esse alias ea, error culpa velit quam? Quos,
            provident! Culpa!
          </p>
        </div>
      </div>
      <div className="success">
        <div>
          <h1>This is Angena !</h1>
          <p>
            You can't believe whitout taking it. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Fugiat perferendis mollitia aut
            delectus nostrum placeat, eos repellendus ex totam suscipit!
          </p>
        </div>
        <img src={success.img2} alt="" />
      </div>
      <div className="success">
        <img src={success.img3} alt="" />
        <div>
          <h1>Hello! I am Jonny !</h1>
          <p>
            I am so happy now. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Vitae, consequatur! Nesciunt accusantium quaerat
            corrupti quos recusandae, perferendis eum modi voluptate, illum
            aperiam officiis fuga debitis, voluptatum ratione molestias saepe
            neque tempore officia? Repudiandae a optio dignissimos qui alias
            voluptatibus velit.
          </p>
        </div>
      </div>
      <div className="success">
        <div>
          <h1>I am Liya !</h1>
          <p>
            I feel lucky to get it. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Totam, vel amet. Recusandae, optio? Vero quidem
            cupiditate repellat reprehenderit ea, suscipit porro numquam
            consequuntur vel accusamus consectetur. Ipsam autem praesentium
            expedita.
          </p>
        </div>
        <img src={success.img4} alt="" />
      </div>
    </>
  );
};

export default Success;
