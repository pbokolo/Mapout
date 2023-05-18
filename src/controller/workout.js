import { model } from "../model/model";

class Workout {
  #workouts;
  constructor() {
    this.#refresh();
  }

  #refresh() {
    this.#workouts = model.getWorkouts();
  }

  getWorkoutsList() {
    return this.#workouts;
  }

  handleSubmit(e, workout) {
    e.preventDefault();
    workout.date = Date.now();
    model.save(workout);

    this.#refresh();
  }
}

const controller = new Workout();

export { controller };
