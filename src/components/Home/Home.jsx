import React, { useEffect } from "react";
import "./home.scss";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import BURGER from "../../images/img-1.png";

const Home = () => {
  useEffect(() => {
    const img = document.querySelector(".img");
    var x = 0;
    var lastScrollTop = 0;
    window.addEventListener("scroll", (e) => {
      var st = window.scrollY;
      if (lastScrollTop < st) {
        x += 1;
        img.style.transform = `translate(0,${x}px)`;
      } else {
        x -= 1;
        img.style.transform = `translate(0,${x}px)`;
      }
      lastScrollTop = st;
    });
  });
  return (
    <div className="home" id="home">
      <div className="text">
        <h3>
          CRISPY <span>TENDER</span>
        </h3>
        <div className="small-mg" data-aos="fade-up">
          <img className="first" src={img1} alt="img11" />
          <img className="second" src={img2} alt="img2" />
          <img className="third" src={img3} alt="img3" />
        </div>
      </div>
      <div className="big-logo">
        <h1>BURGER</h1>
        <div className="image">
          <img className="img" src={BURGER} alt="adsf" />
        </div>
        <button>SEE MORE</button>
      </div>
    </div>
  );
};

export default Home;
