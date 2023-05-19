import { model } from "../model/model";
import { add, set } from "./workoutSlice";

class Workout {
  constructor() {}

  initWokoutList(dispatcher) {
    const workouts = model.getWorkouts();
    dispatcher(set(workouts));
    /* workouts.forEach((workout) => {
      dispatcher(add(workout));
    }); */
  }

  handleSubmit(e, workout, dispatcher) {
    e.preventDefault();
    workout.date = Date.now();
    model.save(workout);
    dispatcher(add(workout));
  }
}

const controller = new Workout();

export { controller };
