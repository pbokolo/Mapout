class WorkoutDAO {
  #list;
  constructor() {
    this.#list = this.#getLocalStorage() || [];
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

  getWorkout(id) {
    return this.#list.find((el) => el.id === id);
  }

  save(workout) {
    this.#list = [...this.#list, workout];
    this.#setLocalStorage();
  }
  delete(id) {
    this.#list = this.#list.filter((item) => item.id !== id);
    this.#setLocalStorage();
    return this.#list;
  }
}

const model = new WorkoutDAO();

export { model };
