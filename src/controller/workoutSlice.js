import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    set: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const { add, set } = workoutSlice.actions;
export default workoutSlice.reducer;
