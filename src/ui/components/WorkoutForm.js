import React from "react";

export default function WorkoutForm() {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <fieldset className="fieldset">
        <label htmlFor="type">Workout</label>
        <select id="type">
          <option>Running</option>
          <option>Cycling</option>
        </select>
      </fieldset>
      <fieldset className="fieldset">
        <label htmlFor="distance">Distance</label>
        <input type="number" id="distance" />
      </fieldset>
      <fieldset className="fieldset">
        <label htmlFor="start">Start</label>
        <input type="number" id="start" />
        <label htmlFor="end">End</label>
        <input type="number" id="end" />
      </fieldset>
    </form>
  );
}
