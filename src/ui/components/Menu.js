import React from "react";
import { useSelector } from "react-redux";
import WorkoutsList from "./WorkoutsList";

export default function Menu() {
  const workouts = useSelector((state) => state.workouts.list.length);
  return (
    <div className="menu">
      <input type="checkbox" className="menu__chk" id="menu__chk" />
      <label htmlFor="menu__chk" className="menu__chk-lbl">
        <span className="menu__icon"></span>
        <span>Workouts({workouts})</span>
      </label>
      <div className="menu__content">
        <WorkoutsList />
      </div>
    </div>
  );
}
