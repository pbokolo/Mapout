import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    currentPosition: [0, 0],
  },
  reducers: {
    set: (state, action) => {
      state.currentPosition = action.payload;
    },
  },
});

export const { set } = mapSlice.actions;
export default mapSlice.reducer;
