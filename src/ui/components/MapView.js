import React, { useState } from "react";
import { controller } from "../../controller/map";
import WorkoutDialog from "./WorkoutDialog";

export default function MapView() {
  const [showDialog, setShowDialog] = useState(true);
  return (
    <div
      id="map"
      className="map"
      onClick={(e) => controller.handleClick(e, setShowDialog)}
    >
      Map
      {showDialog ? <WorkoutDialog /> : ""}
    </div>
  );
}
