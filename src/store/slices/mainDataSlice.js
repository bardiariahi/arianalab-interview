import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : null
};

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    onSubmitData : (state , action) => {
        console.log(action, "action");
        console.log(state, "state"  );
    }
  },
});

export const { onSubmitData } = mainDataSlice.actions;

export default mainDataSlice.reducer;
