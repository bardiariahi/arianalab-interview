import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainData : []
};

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    onSubmitData : (state , action) => {
        state.mainData.push(action.payload)
    }
  },
});

export const { onSubmitData } = mainDataSlice.actions;

export default mainDataSlice.reducer;
