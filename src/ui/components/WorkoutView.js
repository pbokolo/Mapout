import React from "react";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TerrainIcon from "@mui/icons-material/Terrain";

export default function WorkoutView({ workout }) {
  const workoutDate = new Date(workout.date);
  const dateStr = new Intl.DateTimeFormat("fr-FR").format(workoutDate);
  const indicator = workout.type === "Running" ? "r" : "c";
  const icon =
    workout.type === "Running" ? <DirectionsRunIcon /> : <DirectionsBikeIcon />;

  return (
    <div className="workout">
      <div
        className={`workout__indicator workout__indicator--${indicator}`}
      ></div>
      <div className="workout__container">
        {" "}
        <p className="workout__title">{`${workout.type} on ${dateStr}`}</p>
        <div className="workout__details">
          <span className="workout__details-distance">
            {" "}
            {icon} {`${workout.distance} KM`}
          </span>
          {workout.type === "Cycling" ? (
            <span className="workout__details-elevation">
              <span>
                <TerrainIcon />
              </span>
              {`${workout.elevation} M`}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
