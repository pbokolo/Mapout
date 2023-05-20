import { model } from "../model/model";
import { set } from "./workoutSlice";

class Workout {
  constructor() {}

  initWokoutList(dispatcher) {
    this.#refresh(dispatcher);
  }

  #refresh(dispatcher) {
    const workouts = model.getWorkouts();
    dispatcher(set(workouts));
  }
  handleSubmit(e, workout, dispatcher) {
    e.preventDefault();
    workout.date = Date.now();
    model.save(workout);
    this.#refresh(dispatcher);
  }
}

const controller = new Workout();

export { controller };
