import { model } from "../model/model";

class Workout {
  constructor() {}

  getWorkoutsList() {
    return model.getWorkouts();
  }

  handleSubmit(e, workout) {
    e.preventDefault();
    workout.date = Date.now();
    console.log(workout);
  }
}

const controller = new Workout();

export { controller };
