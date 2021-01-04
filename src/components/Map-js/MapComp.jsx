import React from "react";
import "./MapComp.scss";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { CircularProgress } from "@material-ui/core";

const mapStyle = {
  position: "relative",
  height: "100%",
  width: "100%",
};
const MapComp = ({ google }) => {
  return (
    <div className="map">
      <Map
        style={mapStyle}
        google={google}
        zoom={12}
        initialCenter={{
          lat: 50.43,
          lng: 20.32,
        }}
      >
        <Marker name="Your Company Location" />
      </Map>
    </div>
  );
};

const loading = (props) => (
  <div className="loading">
    <CircularProgress />
  </div>
);

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.API_MAPS,
  LoadingContainer: loading,
}))(MapComp);
