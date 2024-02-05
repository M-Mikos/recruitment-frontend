import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    isNameVisible: false,
  },
  reducers: {
    toggleName: (state) => {
      state.isNameVisible = !state.isNameVisible;
    },
  },
});

export const { toggleName } = uiSlice.actions;

export default uiSlice.reducer;
