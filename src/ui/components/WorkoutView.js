import React from "react";

export default function WorkoutView({ workout }) {
  const workoutDate = new Date(workout.date);
  const dateStr = new Intl.DateTimeFormat("fr-FR").format(workoutDate);
  const indicator = workout.type === "Running" ? "r" : "c";

  return (
    <div className="workout">
      <div
        className={`workout__indicator workout__indicator--${indicator}`}
      ></div>
      <div className="workout__container">
        {" "}
        <p className="workout__title">{`${workout.type} on ${dateStr}`}</p>
        <div className="workout__details">
          <span className="workout__details-distance">{`${workout.distance} KM`}</span>
          {workout.type === "Cycling" ? (
            <span className="workout__details-distance">{`${workout.elevation} M`}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
