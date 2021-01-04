import { Drawer, withStyles } from "@material-ui/core";
import "./funcs.scss";
import {
  DoneOutline,
  Facebook,
  Instagram,
  Search,
  Twitter,
  YouTube,
} from "@material-ui/icons";

export const menuItems = [
  { id: 0, text: "HOME", url: "#" },
  { id: 1, text: "ABOUT", url: "#about" },
  { id: 2, text: "OFFERS", url: "#offers" },
  { id: 3, text: "MENU", url: "#menu" },
  { id: 4, text: "CONTACT", url: "#contact" },
];
export const setNavbarStickyOnScroll = (setStickyNav) => {
  window.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  });
};

export const handleMenuClick = (setShowMenuItems, showMenuItems) => {
  setShowMenuItems(!showMenuItems);
};

const DrawerStyled = withStyles(() => ({
  paper: {
    backgroundColor: "#232323",
  },
}))(Drawer);

export const MenuItemsMobile = ({ setShowMenuItems, showMenuItems }) => {
  return (
    <DrawerStyled
      anchor="left"
      open={showMenuItems}
      onClose={(e) => setShowMenuItems(false)}
    >
      <div className="mobile-view">
        {menuItems.map((item) => (
          <a href={`#${item.text}`}>
            <h3
              key={item.id}
              onClick={() => setShowMenuItems(false)}
              className="menu-item"
            >
              {item.text}
            </h3>
          </a>
        ))}
        <div className="search">
          <input type="text" placeholder="Search here.." />
          <Search className="search-icon" />
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <YouTube />
          <Twitter />
        </div>
      </div>
    </DrawerStyled>
  );
};

export const CartItemsMenu = ({
  openCartMenuItems,
  setOpenCartMenuItems,
  cartItems,
  totalPrice,
}) => {
  return (
    <DrawerStyled
      anchor="right"
      open={openCartMenuItems}
      onClose={(e) => setOpenCartMenuItems(false)}
    >
      <div className="cart-drawer">
        <h1>You Cart</h1>
        <div className="info">
          <h3>
            <span>Total Price :</span> ${totalPrice}
          </h3>
          <h3>
            <span>Items Number :</span>
            {cartItems?.length}
          </h3>
        </div>
        <div className="items">
          {cartItems?.map((item) => (
            <div className="item">
              <img src={item?.img} alt={item?.title} />
              <div className="info">
                <h3>{item?.title}</h3>
                <p>Price : {item?.price}</p>
              </div>
            </div>
          ))}
          <div className="go-to-cart">
            <DoneOutline />
          </div>
        </div>
      </div>
    </DrawerStyled>
  );
};
