import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    list: [],
    showDialog: false,
    distanceError: false,
    elevationError: false,
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    set: (state, action) => {
      state.list = action.payload;
    },

    setShowDialog: (state, action) => {
      state.showDialog = action.payload;
    },

    setDistanceError: (state, action) => {
      state.distanceError = action.payload;
    },

    setElevationError: (state, action) => {
      state.elevationError = action.payload;
    },
  },
});

export const { add, set, setShowDialog, setDistanceError, setElevationError } =
  workoutSlice.actions;
export default workoutSlice.reducer;
