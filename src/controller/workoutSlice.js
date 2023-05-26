import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    list: [],
    showDialog: false,
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
  },
});

export const { add, set, setShowDialog } = workoutSlice.actions;
export default workoutSlice.reducer;
