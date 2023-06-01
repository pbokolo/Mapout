import React, { useState } from "react";

import { controller } from "../../controller/workout";
import { useDispatch } from "react-redux";
export default function WorkoutForm({ coords }) {
  const dispatch = useDispatch();
  const initWorkout = {
    id: "",
    date: "",
    type: "Running",
    distance: 0,
    elevation: 0,
    location: JSON.stringify(coords),
  };
  const [workout, setWorkout] = useState(initWorkout);

  const inputChangeHandler = (e) => {
    setWorkout({
      ...workout,
      [e.target.id]: +e.target.value,
    });
  };

  const selectChangeHandler = (e) => {
    setWorkout({ ...workout, type: e.target.value });
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        setWorkout(initWorkout);
        controller.handleSubmit(e, workout, dispatch);
      }}
    >
      <fieldset className="fieldset">
        <label className="label" htmlFor="type">
          Workout
        </label>
        <select className="textInput" id="type" onChange={selectChangeHandler}>
          <option>Running</option>
          <option>Cycling</option>
        </select>
      </fieldset>
      <fieldset className="fieldset">
        <label className="label" htmlFor="distance">
          Distance
        </label>
        <input
          className="textInput"
          type="number"
          id="distance"
          value={workout.distance}
          onChange={inputChangeHandler}
        />
      </fieldset>
      {workout.type === "Cycling" ? (
        <fieldset className="fieldset">
          <label className="label" htmlFor="distance">
            Elevation gain
          </label>
          <input
            className="textInput"
            type="number"
            id="elevation"
            value={workout.elevation}
            onChange={inputChangeHandler}
          />
        </fieldset>
      ) : (
        ""
      )}
      <fieldset className="fieldset fieldset--submit">
        <input
          className="btn btn--primary btn--submit"
          type="submit"
          value="Save"
        />
      </fieldset>
    </form>
  );
}
