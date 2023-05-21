class Map {
  constructor() {}

  handleClick(e, setOpenDialog, setPosition) {
    this.handleOpenDialog(setOpenDialog);
    setPosition(e.latlng);
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
