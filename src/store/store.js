import { configureStore } from "@reduxjs/toolkit";
import mainDataReducer from "../store/slices/mainDataSlice";

export const store = configureStore({
  reducer: {
    mainData: mainDataReducer,
  },
});
