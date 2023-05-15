class WorkoutDAO {
  #list;
  constructor() {
    this.#list = [
      {
        date: 1684130434844,
        type: "Running",
        distance: 20,
        elevation: 0,
        location: "",
      },
      {
        date: 1684130434844,
        type: "Cycling",
        distance: 20,
        elevation: 24,
        location: "",
      },
      {
        date: 1684130434844,
        type: "Running",
        distance: 20,
        elevation: 0,
        location: "",
      },
      {
        date: 1684130434844,
        type: "Cycling",
        distance: 20,
        elevation: 24,
        location: "",
      },
    ];
  }

  getWorkouts() {
    return this.#list;
  }

  save(workout) {
    localStorage.setItem("workouts", workout);
  }
}

const model = new WorkoutDAO();

export { model };
