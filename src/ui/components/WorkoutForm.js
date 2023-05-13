import React from "react";

export default function WorkoutForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="distance">Distance</label>
        <input type="number" />
      </div>

      <div>
        <label htmlFor="start">Start</label>
        <input type="number" />
        <label htmlFor="start">End</label>
        <input type="number" />
      </div>
    </form>
  );
}
