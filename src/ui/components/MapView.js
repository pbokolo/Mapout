import React, { useState } from "react";
import { controller } from "../../controller/map";
import NewWorkoutDialog from "./NewWorkoutDialog";

export default function MapView() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="map" onClick={() => controller.handleClick(setShowDialog)}>
      Map
      {showDialog ? <NewWorkoutDialog /> : ""}
    </div>
  );
}
