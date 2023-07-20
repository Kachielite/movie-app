import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SelectionState {
  value: string;
}

const initialState: SelectionState = {
  value: "movie",
};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectionType: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { selectionType } = selectionSlice.actions;

export default selectionSlice.reducer;
