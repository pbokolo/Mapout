import React, { useState } from "react";
import WorkoutView from "./WorkoutView";

import { controller } from "../../controller/workout";

export default function WorkoutsList() {
  const [list, setList] = useState(controller.getWorkoutsList());
  return (
    <div className="workouts workouts__container">
      {list.map((w, i) => (
        <WorkoutView key={i} workout={w} />
      ))}
    </div>
  );
}
