class Map {
  constructor() {}

  handleClick(e, setState) {
    if (e.target.id === "dialog") {
      setState(false);
    } else {
      setState(true);
    }
  }

  handleClose(setState) {
    setState(false);
  }
}

const controller = new Map();
export { controller };
