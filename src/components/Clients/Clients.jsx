import React from "react";
import "./Clients.scss";
import girl from "../../images/girl.jpg";
import img1 from "../../images/im1.jpg";
import img2 from "../../images/im2.jpg";
import img3 from "../../images/im3.jpg";
import img4 from "../../images/im4.jpg";

const Clients = () => {
  return (
    <>
      <div className="clients">
        <img src={girl} alt="girl" data-aos={`fade-right`} />
        <div className="info">
          <span>TESTIMONIALS </span>
          <h1>What our clients have to say</h1>
          <strong>99</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
          <h4>-John Doe</h4>
        </div>
      </div>
      <div className="images">
        <img src={img1} alt="the first" data-aos={`fade-right`}/>
        <img src={img2} alt="the first" data-aos={`fade-up`}/>
        <img src={img3} alt="the first" data-aos={`fade-down`}/>
        <img src={img4} alt="the first" data-aos={`fade-left`}/>
      </div>
    </>
  );
};

export default Clients;
