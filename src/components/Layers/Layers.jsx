import React from "react";
import "./Layers.scss";
import layer1 from "../../images/back.png";
import layer2 from "../../images/back2.png";
import { Container } from "@material-ui/core";

const layers = [
  {
    class: "layer-1",
    side: "right",
    id: 0,
    title: "Enjoy our specially prepared burgers for you",
    discount: "-25% OFF",
    img: layer1,
    disc: "Dont miss out on our daily special offers",
    btn: "SEE MENU",
  },
  {
    class: "layer-2",
    side: "left",
    id: 1,
    title: "New, amazing sandwich offers every day",
    discount: "-15% OFF",
    img: layer2,
    disc: "Just add some of our juicy side dishes",
    btn: "SEE MORE",
  },
];

const Layers = () => {
  return (
    <div className="layers">
      <Container>
        {layers.map((layer) => (
          <div className={`layer ${layer.class}`}>
            <img src={layer.img} alt="layer1" data-aos={`fade-${layer.side}`} />
            <div className="info">
              <span>{layer.discount}</span>
              <h1>{layer.title}</h1>
              <h4>{layer.disc}</h4>
              <button>{layer.btn}</button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Layers;
