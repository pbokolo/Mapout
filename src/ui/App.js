import React, { useEffect } from "react";

import { MapView, WorkoutsList } from "./components";

import "./style/main.scss";
import { controller } from "../controller/workout";
import { controller as mapController } from "../controller/map";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    controller.init(dispatch);
    mapController.init(dispatch);
  }, null);
  return (
    <div className="app">
      <WorkoutsList />
      <MapView />
    </div>
  );
}

export default App;
