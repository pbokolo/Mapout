class Map {
  constructor() {}

  handleClick(e, map, setOpenDialog, setPosition) {
    this.handleOpenDialog(setOpenDialog);
    setPosition(e.latlng);
    map.flyTo(e.latlng, map.getZoom());
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
