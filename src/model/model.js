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
  delete(id) {
    this.#list = this.#list.filter((item) => item.date !== id);
    this.#setLocalStorage();
    return this.#list;
  }
}

const model = new WorkoutDAO();

export { model };
