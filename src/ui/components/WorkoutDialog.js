import React from "react";

import WorkoutForm from "./WorkoutForm";
import CloseIcon from "@mui/icons-material/Close";

export default function WorkoutDialog() {
  return (
    <div id="dialog" className="dialog dialog__overlay">
      <div className="dialog__content">
        <div className="dialog__content-header">
          <h5 className="title-h5">Create a new workout</h5>
        </div>
        <button className="btn btn--white btn--round btn-close">
          <CloseIcon id="close" />
        </button>
        <div className="dialog__content-body">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}
