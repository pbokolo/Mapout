import React, { useEffect } from "react";

import { MapView } from "./components";

import "./style/main.scss";
import { controller } from "../controller/workout";
import { controller as mapController } from "../controller/map";
import { controller as appController } from "../controller/app";
import { useDispatch } from "react-redux";
import Menu from "./components/Menu";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    controller.init(dispatch);
    mapController.init(dispatch);
  }, null);

  const handleClick = (e) => {
    const text = e.target.textContent;
    if (text === "Go FS") {
      appController.setFullScreen();
      e.target.textContent = "Exit FS";
    } else {
      appController.exitFullScreen();
      e.target.textContent = "Go FS";
    }
  };
  return (
    <div className="app">
      {appController.checkUserAgent() ? (
        <button className="fm-btn" onClick={handleClick}>
          Go FS
        </button>
      ) : (
        ""
      )}
      <Menu />
      <MapView />
    </div>
  );
}

export default App;
