import React from "react";

import WorkoutForm from "./WorkoutForm";
import CloseIcon from "@mui/icons-material/Close";

export default function WorkoutDialog({ coords, closeHandler }) {
  return (
    <div id="overlay" className="dialog dialog__overlay" onClick={closeHandler}>
      <div className="dialog__content">
        <div className="dialog__content-header">
          <h5 className="title-h5">Create a new workout</h5>
        </div>
        <button className="btn btn--white btn--round btn-close" id="close">
          <CloseIcon id="close__icon" />
        </button>
        <div className="dialog__content-body">
          <WorkoutForm coords={coords} />
        </div>
      </div>
    </div>
  );
}
