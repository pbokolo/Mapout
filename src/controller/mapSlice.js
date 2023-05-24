import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    currentPosition: [0, 0],
    zoom: 5,
  },
  reducers: {
    set: (state, action) => {
      state.currentPosition = action.payload;
    },
    updateZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});

export const { set, updateZoom } = mapSlice.actions;
export default mapSlice.reducer;
