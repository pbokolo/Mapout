class Workout {
  constructor() {}

  handleSubmit(e, workout) {
    e.preventDefault();
    workout.date = Date.now();
    console.log(workout);
  }
}

const controller = new Workout();

export { controller };
