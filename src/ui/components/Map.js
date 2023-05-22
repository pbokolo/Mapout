import { useMap } from "react-leaflet";
import { controller } from "../../controller/map";

const Map = ({ position, positionSetter, showDialogSetter }) => {
  const map = useMap();
  map.flyTo(position, map.getZoom());
  map.on("click", (e) =>
    controller.handleClick(e, showDialogSetter, positionSetter)
  );
};

export { Map };
