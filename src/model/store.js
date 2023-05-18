import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "../controller/workoutSlice";

// This is gonna create the redux store
export default configureStore({ reducer: { workouts: workoutReducer } });
