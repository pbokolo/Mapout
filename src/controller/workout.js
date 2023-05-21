import { model } from "../model/model";
import { set } from "./workoutSlice";
import { v4 as uuidv4 } from "uuid";

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
    workout.id = uuidv4();
    workout.date = Date.now();

    model.save(workout);
    this.#refresh(dispatcher);
  }

  handleClick(e, dispatcher) {
    const el = e.target.closest("button");
    const ds = +el.dataset.workout;

    this.#refresh(dispatcher);
  }
}

const controller = new Workout();

export { controller };
