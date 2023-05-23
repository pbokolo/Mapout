import { model } from "../model/model";
import { set } from "./workoutSlice";
import { set as setCurPos } from "./mapSlice";
import { v4 as uuidv4 } from "uuid";

class Workout {
  #dispatcher;
  constructor() {}

  init(dispatcher) {
    this.#dispatcher = dispatcher;
    this.#refresh();
  }

  #refresh() {
    const workouts = model.getWorkouts();
    this.#dispatcher(set(workouts));
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
    if (el) {
      //Deletes the workout
      const ds = el.dataset.workout;
      model.delete(ds);
      this.#refresh(dispatcher);
    } else {
      // Gets the workout
      const id = e.target.closest("div[class='workout__container']").dataset.id;
      const workout = model.getWorkout(id);
      this.#dispatcher(setCurPos(JSON.parse(workout.location)));
    }
  }
}

const controller = new Workout();

export { controller };
