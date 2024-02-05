import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import textDataReducer from "./slices/textDataSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    textData: textDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
