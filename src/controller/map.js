import { set } from "./mapSlice";
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

  handleClick(e, setOpenDialog) {
    this.handleOpenDialog(setOpenDialog);
    const { lat, lng } = e.latlng;
    const pos = [lat, lng];
    this.#dispatcher(set(pos));
  }

  #handleGeolocationError(error) {
    alert(error);
  }

  handleOpenDialog(setState) {
    setState(true);
  }

  handleCloseDialog(e, setState) {
    if (
      e.target.id !== "close" &&
      e.target.id !== "close__icon" &&
      e.target.id !== "overlay"
    )
      return;
    setState(false);
  }
}

const controller = new Map();
export { controller };
