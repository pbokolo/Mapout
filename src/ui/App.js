import React, { useEffect } from "react";

import { MapView, WorkoutsList } from "./components";

import "./style/main.scss";
import { controller } from "../controller/workout";
import { controller as mapController } from "../controller/map";
import { useDispatch } from "react-redux";
import Menu from "./components/Menu";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    checkUserAgent();
    controller.init(dispatch);
    mapController.init(dispatch);
  }, null);

  function checkUserAgent() {
    let device =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      null;

    return device;
  }

  function setFullScreen() {
    const root = document.getElementById("root");
    if (root.requestFullscreen) {
      root.requestFullscreen();
    } else if (root.msRequestFullscreen) {
      root.msRequestFullscreen();
    } else if (root.mozRequestFullscreen) {
      root.mozRequestFullscreen();
    }
    if (checkUserAgent) {
      lockOrientation();
    }
  }

  function exitFullScreen() {
    const root = document.getElementById("root");
    if (root.exitFullscreen) {
      root.exitFullscreen();
    } else if (root.msexitFullscreen) {
      root.msexitFullscreen();
    } else if (root.mozexitFullscreen) {
      root.mozexitFullscreen();
    }
    if (checkUserAgent) {
      unlockOrientation();
    }
  }

  function lockOrientation() {
    let screenOrientation = window.screen.orientation;
    screenOrientation.lock("landscape");
  }

  function unlockOrientation() {
    let screenOrientation = window.screen.orientation;
    screenOrientation.unlock();
  }

  const handleClick = (e) => {
    const text = e.target.textContent;
    if (text === "Go FS") {
      setFullScreen();
      e.target.textContent = "Exit FS";
    } else {
      exitFullScreen();
      e.target.textContent = "Go FS";
    }
  };
  return (
    <div className="app">
      {checkUserAgent() ? (
        <button className="fm-btn" onClick={handleClick}>
          Go FS
        </button>
      ) : (
        ""
      )}
      {/* <WorkoutsList /> */}
      <Menu />
      <MapView />
    </div>
  );
}

export default App;
