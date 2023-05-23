import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "../controller/workoutSlice";
import mapReducer from "../controller/mapSlice";

// This is gonna create the redux store
export default configureStore({
  reducer: { workouts: workoutReducer, map: mapReducer },
});
