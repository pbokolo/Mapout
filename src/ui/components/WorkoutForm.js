import React, { useState } from "react";

import { controller } from "../../controller/workout";
export default function WorkoutForm() {
  const initWorkout = {
    date: "",
    type: "Running",
    distance: 0,
    elevation: 0,
    location: "",
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
        controller.handleSubmit(e, workout);
      }}
    >
      <fieldset className="fieldset">
        <label htmlFor="type">Workout</label>
        <select id="type" onChange={selectChangeHandler}>
          <option>Running</option>
          <option>Cycling</option>
        </select>
      </fieldset>
      <fieldset className="fieldset">
        <label htmlFor="distance">Distance</label>
        <input
          type="number"
          id="distance"
          value={workout.distance}
          onChange={inputChangeHandler}
        />
      </fieldset>
      {workout.type === "Cycling" ? (
        <fieldset className="fieldset">
          <label htmlFor="distance">Elevation gain</label>
          <input
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
