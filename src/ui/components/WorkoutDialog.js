import React from "react";

export default function WorkoutDialog() {
  return (
    <div id="dialog" className="dialog__overlay">
      <div className="dialog__content">
        <div className="dialog__content-header">
          <h5>Create a new workout</h5>
        </div>
        <div className="dialog__content-body">Your form here</div>
        <div className="dialog__content-footer">Footer</div>
      </div>
    </div>
  );
}
