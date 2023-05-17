import React, { useState } from "react";
import { controller } from "../../controller/map";
import WorkoutDialog from "./WorkoutDialog";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapView() {
  const [showDialog, setShowDialog] = useState(false);
  const [position, setPosition] = useState([0.4880271, 29.4203555]);

  const Map = () => {
    const map = useMap();

    const handleClick = (e, map) => {
      controller.handleClick(e, setShowDialog);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    };

    map.on("click", (e) => handleClick(e, map));

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };
  return (
    <div id="map" className="map">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Map />
      </MapContainer>
      {showDialog ? <WorkoutDialog /> : ""}
    </div>
  );
}
