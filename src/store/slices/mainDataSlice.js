import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainData : null
};

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    onSubmitData : (state , action) => {
        console.log(action.payload, "action");
        state.mainData = action.payload
    }
  },
});

export const { onSubmitData } = mainDataSlice.actions;

export default mainDataSlice.reducer;
