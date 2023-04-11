import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    onSubmitData : (state , action) => {
        console.log(action)
    }
  },
});

export const { onSubmitData } = mainDataSlice.actions;

export default mainDataSlice.reducer;
