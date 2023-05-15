import React from "react";
import WorkoutView from "./WorkoutView";

import { controller } from "../../controller/workout";

export default function WorkoutsList() {
  return (
    <div className="workouts workouts__container">
      {controller.getWorkoutsList().map((w, i) => (
        <WorkoutView key={i} workout={w} />
      ))}
    </div>
  );
}
