import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { controller } from "../../controller/map";

const Map = ({ position }) => {
  const zoom = useSelector((state) => state.map.zoom);
  const map = useMap();
  map.flyTo(position, zoom);
  map.on("click", (e) => controller.handleClick(e));
};

export { Map };
