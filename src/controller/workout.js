import { model } from "../model/model";
import { add, set } from "./workoutSlice";

class Workout {
  #workouts;
  constructor(dispatcher) {
    const workouts = model.getWorkouts();
    dispatcher(set(workouts));
  }

  #refresh(dispatcher) {
    const workouts = model.getWorkouts();
    () => dispatcher(set(workouts));
  }

  getWorkoutsList() {
    return this.#workouts;
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
export default Workout;
