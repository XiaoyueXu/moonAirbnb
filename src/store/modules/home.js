import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {},
  reducers: {
    decrement: (state) => {},
    increment: (state) => {},
  },
});

export const { decrement, increment } = homeSlice.actions;
export default homeSlice.reducer;
