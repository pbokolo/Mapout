import { set, updateZoom } from "./mapSlice";
import { setShowDialog } from "./workoutSlice";
class Map {
  #dispatcher;

  constructor() {}

  init(dispatcher) {
    this.#dispatcher = dispatcher;
    this.initPosition();
  }

  initPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const posArr = [latitude, longitude];
          this.#dispatcher(set(posArr));
        },
        (error) => this.#handleGeolocationError(error)
      );
    }
  }

  handleClick(e) {
    // this.handleOpenDialog(setOpenDialog);
    this.#dispatcher(setShowDialog(true));
    const { lat, lng } = e.latlng;
    const pos = [lat, lng];
    this.#dispatcher(set(pos));
    this.#dispatcher(updateZoom(14));
  }

  #handleGeolocationError(error) {
    console.log(error);
  }

  handleOpenDialog(setState) {
    setState(true);
  }

  handleCloseDialog(e) {
    if (
      e.target.id !== "close" &&
      e.target.id !== "close__icon" &&
      e.target.id !== "overlay"
    )
      return;
    this.#dispatcher(setShowDialog(false));
  }
}

const controller = new Map();
export { controller };
