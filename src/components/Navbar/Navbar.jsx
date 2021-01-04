import { Badge } from "@material-ui/core";
import { Menu, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";
import "./Navbar.scss";
import {
  menuItems,
  MenuItemsMobile,
  setNavbarStickyOnScroll,
  handleMenuClick,
  CartItemsMenu,
} from "./funcs";
import { connect } from "react-redux";

const Navbar = ({ cartItems, totalPrice }) => {
  const [stickyNav, setStickyNav] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [openCartMenuItems, setOpenCartMenuItems] = useState(false);

  useEffect(() => {
    setNavbarStickyOnScroll(setStickyNav);
  }, [stickyNav]);
  return (
    <div className={`navbar ${stickyNav && "sticky-navbar"}`}>
      <div className="logo">
        <img src={!stickyNav ? logo : logo2} alt="logo" />
      </div>
      <div className="items-container">
        <Menu
          className="menu-icon"
          onClick={() => handleMenuClick(setShowMenuItems, showMenuItems)}
        />
        <div className="items">
          {menuItems.map((item) => (
            <a href={`#${item.text}`}>
              <h3 key={item.id} onClick={() => setShowMenuItems(false)}>
                {item.text}
              </h3>
            </a>
          ))}
        </div>
        <Badge
          color="secondary"
          badgeContent={cartItems?.length}
          className="badge"
          onClick={() => setOpenCartMenuItems(true)}
        >
          <ShoppingCartOutlined />
        </Badge>
        <CartItemsMenu
          totalPrice={totalPrice}
          openCartMenuItems={openCartMenuItems}
          setOpenCartMenuItems={setOpenCartMenuItems}
          cartItems={cartItems}
        />
      </div>
      <MenuItemsMobile
        setShowMenuItems={setShowMenuItems}
        showMenuItems={showMenuItems}
      />
    </div>
  );
};
const mapState = (state) => ({
  cartItems: state.cartItems,
  totalPrice: state.totalPrice,
});

export default connect(mapState)(Navbar);
