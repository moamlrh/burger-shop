import React from "react";
import "./About.scss";
import first from "../../images/first.jpg";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${0.8})`;

const About = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="about" id="ABOUT">
      <div className="image">
        <animated.img
          data-aos="fade-right"
          src={first}
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
      </div>
      <div className="info">
        <span>About</span>
        <h1>Delivering best ingredients for our trusty food lovers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <h4>
          Risus commodo viverra maecenas accumsan lacus lalala vel facilisis.{" "}
        </h4>
      </div>
    </div>
  );
};

export default About;
