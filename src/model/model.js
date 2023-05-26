class WorkoutDAO {
  #list;
  constructor() {
    this.#list = this.#getLocalStorage() || [];
  }

  #setLocalStorage() {
    localStorage.setItem(
      "workouts",
      JSON.stringify(this.#sortArray(this.#list))
    );
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

  #sortArray(arr) {
    return arr.sort((a, b) => {
      const dateA = a.date;
      const dateB = b.date;
      if (dateA > dateB) {
        return -1;
      }
      if (dateA < dateB) {
        return 1;
      }
      return 0;
    });
  }
}

const model = new WorkoutDAO();

export { model };
