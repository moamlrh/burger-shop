import React from "react";
import "./Trending.scss";

import img1 from "../../images/i1.jpg";
import img2 from "../../images/i2.jpg";
import img3 from "../../images/i3.jpg";
import img4 from "../../images/i4.jpg";
import img5 from "../../images/i5.jpg";
import img6 from "../../images/i6.jpg";
import img7 from "../../images/i7.jpg";
import img8 from "../../images/i8.jpg";
import { AddBoxOutlined } from "@material-ui/icons";
const information = [
  {
    id: 0,
    class: "trending",
    title: "Trending Burger",
    items: [
      {
        img: img1,
        title: "Juciy Burger",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
      {
        img: img2,
        title: "Juciy",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
      {
        img: img3,
        title: "Juciy Burger",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
      {
        img: img4,
        title: " Burger",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
    ],
  },
  {
    id: 1,
    class: "dessert",
    title: "Dessert Menu",
    items: [
      {
        img: img5,
        title: "Chocolate Mix",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
      {
        img: img6,
        title: "Apple Pie",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
      {
        img: img7,
        title: "Strawberry Mix",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
      {
        img: img8,
        title: " Sunday Waffle",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "8$",
      },
    ],
  },
];

const Trending = () => {
  return (
    <div className="tred-desr">
      {information.map((info) => (
        <div className={`item ${info.class}`}>
          <h1>{info.title}</h1>
          <div className="items">
            {info.items.map((item) => (
              <div className="item">
                <img src={item.img} data-aos="zoom-in" alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="price">
                  <span>{item.price}</span>
                  <button>
                    <AddBoxOutlined />
                    <span>add to cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
