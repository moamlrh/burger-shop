import React from "react";
import "./Offers.scss";
import hue from "../../images/hue.jpg";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import { AddBoxOutlined } from "@material-ui/icons";
import { connect } from "react-redux";
import { addToCartRedux } from "../../Redux/Actions";

const rightItems = [
  { id: 0, img: img1, title: "Juicy Beef Burger Meal", price: 16 },
  { id: 1, img: img2, title: "Choko Milkshake From Heaven", price: 8 },
  { id: 2, img: img3, title: "Blueberry Waffles", price: 4 },
  { id: 3, img: img4, title: "Medium Portion of Fries", price: 3 },
];

const Offers = ({ addToCartDis }) => {
  const handleAddToCart = (product) => {
    addToCartDis(product);
  };
  return (
    <div className="offers" id="OFFERS">
      <div className="title">
        <h1>Special offers</h1>
      </div>
      <div className="parts">
        <div className="left">
          <img src={hue} alt="hue img" />
          <div className="info">
            <h2>Ham Sandwich</h2>
            <div className="size">
              <h4>fat 26g </h4>
              <h4>sugars 34g </h4>
              <h4>carbs 26g </h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="price">
            <h1>$14</h1>
            <button>
              <AddBoxOutlined /> <span>LEARN MORE</span>
            </button>
          </div>
        </div>
        <div className="right">
          {rightItems.map((item) => (
            <div className="item">
              <div className="image">
                <img data-aos="zoom-in" src={item.img} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <span>${item.price}</span>
              <button onClick={() => handleAddToCart(item)}>
                <AddBoxOutlined /> <span> Add to cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const mapDispatch = (dispatch) => ({
  addToCartDis: (product) => dispatch(addToCartRedux(product)),
});
export default connect(null, mapDispatch)(Offers);
