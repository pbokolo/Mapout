import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../controller/map";

import { Map } from "./Map";
import WorkoutDialog from "./WorkoutDialog";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
  const workouts = useSelector((state) => state.workouts.list);

  return (
    <div id="map" className="map">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Map
          position={position}
          positionSetter={setPosition}
          showDialogSetter={setShowDialog}
        />
        {workouts.map((workout) => (
          <Marker key={workout.id} position={JSON.parse(workout.location)}>
            <Popup>{workout.type}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {showDialog ? (
        <WorkoutDialog
          closeHandler={(e) => controller.handleCloseDialog(e, setShowDialog)}
          coords={position}
        />
      ) : (
        ""
      )}
    </div>
  );
}
