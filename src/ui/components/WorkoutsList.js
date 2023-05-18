import React from "react";
import { useSelector } from "react-redux";

import WorkoutView from "./WorkoutView";

export default function WorkoutsList() {
  const list = useSelector((state) => state.workouts.list);

  return (
    <div className="workouts workouts__container">
      {list.map((w, i) => (
        <WorkoutView key={i} workout={w} />
      ))}
    </div>
  );
}
