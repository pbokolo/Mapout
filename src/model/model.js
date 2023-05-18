class WorkoutDAO {
  #list;
  constructor() {
    this.#list = this.#getLocalStorage();
  }

  #setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#list));
  }

  #getLocalStorage() {
    return JSON.parse(localStorage.getItem("workouts"));
  }

  getWorkouts() {
    return this.#list;
  }

  save(workout) {
    this.#list.push(workout);
    this.#setLocalStorage();
  }
}

const model = new WorkoutDAO();

export { model };
