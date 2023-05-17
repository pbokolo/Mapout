class Map {
  constructor() {}

  handleClick(e, setState) {
    if (e.target.id === "map") {
      this.handleOpenDialog(setState);
    } else if (e.target.id === "dialog" || e.target.id === "close") {
      this.handleClose(setState);
    }
  }

  handleOpenDialog(setState) {
    setState(true);
  }

  handleClose(setState) {
    setState(false);
  }
}

const controller = new Map();
export { controller };
