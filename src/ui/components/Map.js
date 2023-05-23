import { useMap } from "react-leaflet";
import { controller } from "../../controller/map";

const Map = ({ position, showDialogSetter }) => {
  const map = useMap();
  map.flyTo(position, map.getZoom());
  map.on("click", (e) => controller.handleClick(e, showDialogSetter));
};

export { Map };
