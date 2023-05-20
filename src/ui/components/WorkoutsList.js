import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { controller } from "../../controller/workout";
import WorkoutView from "./WorkoutView";

export default function WorkoutsList() {
  const list = useSelector((state) => state.workouts.list);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    controller.handleClick(e, dispatch);
  };
  return (
    <div className="workouts workouts__container" onClick={handleClick}>
      {list.map((w, i) => (
        <WorkoutView key={i} workout={w} />
      ))}
    </div>
  );
}
