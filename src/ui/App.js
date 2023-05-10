import WorkoutsList from "./components/WorkoutsList";
import MapView from "./components/MapView";
import "./style/main.scss";
function App() {
  return (
    <div className="app">
      <WorkoutsList />
      <MapView />
    </div>
  );
}

export default App;
