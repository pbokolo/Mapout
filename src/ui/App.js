import React, { useEffect } from "react";
import WorkoutsList from "./components/WorkoutsList";
import MapView from "./components/MapView";
import "./style/main.scss";
import { controller } from "../controller/workout";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    controller.initWokoutList(dispatch);
  }, null);
  return (
    <div className="app">
      <WorkoutsList />
      <MapView />
    </div>
  );
}

export default App;
