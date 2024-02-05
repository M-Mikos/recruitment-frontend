import { createSlice } from "@reduxjs/toolkit";

export const textDataSlice = createSlice({
  name: "textDataSlice",
  initialState: {
    usedDataIndexes: <number[]>[],
    data: <string[]>[],
  },
  reducers: {
    loadData: (state, action) => {
      state.data = action.payload;
    },
    addDataIndex: (state, action) => {
      state.usedDataIndexes.push(action.payload);
    },
    clearDataIndexes: (state) => {
      state.usedDataIndexes = [];
    },
    replaceDataIndexes: (state, action) => {
      state.usedDataIndexes = [action.payload];
    },
  },
});

export const { loadData, addDataIndex, clearDataIndexes, replaceDataIndexes } =
  textDataSlice.actions;

export default textDataSlice.reducer;
