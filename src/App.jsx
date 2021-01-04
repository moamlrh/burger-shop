import { Container } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./app.scss";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Layers from "./components/Layers/Layers";
import MapComp from "./components/Map-js/MapComp";
import Navbar from "./components/Navbar/Navbar";
import Offers from "./components/offers/Offers";
import Trending from "./components/Trending/Trending";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();
function App() {
  const [showUpIcon, setShowUpIcon] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setShowUpIcon(document.documentElement.scrollTop);
    });
  }, []);
  return (
    <Provider store={Store}>
      <div className="app">
        <div className="bg">
          <Navbar />
          <Home />
        </div>
        <Container>
          <About />
          <Offers />
        </Container>
        <Layers />
        <Container>
          <Trending />
          <Clients />
          <Footer />
          <MapComp />
        </Container>
        <a href="#home">
          <div
            className="back-to-top"
            style={{ opacity: showUpIcon > 150 ? 1 : 0 }}
          >
            <ArrowUpward />
          </div>
        </a>
      </div>
    </Provider>
  );
}

export default App;
