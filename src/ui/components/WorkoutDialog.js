import React from "react";
import WorkoutForm from "./WorkoutForm";
export default function WorkoutDialog() {
  return (
    <div id="dialog" className="dialog__overlay">
      <div className="dialog__content">
        <div className="dialog__content-header">
          <h5 className="title-h5">Create a new workout</h5>
        </div>
        <div className="dialog__content-body">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}
