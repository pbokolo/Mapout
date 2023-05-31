import React, { useEffect } from "react";

import { MapView } from "./components";

import "./style/main.scss";
import { controller } from "../controller/workout";
import { controller as mapController } from "../controller/map";
import { useDispatch } from "react-redux";
import Menu from "./components/Menu";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    controller.init(dispatch);
    mapController.init(dispatch);
  }, null);

  return (
    <div className="app">
      <Menu />
      <MapView />
    </div>
  );
}

export default App;
