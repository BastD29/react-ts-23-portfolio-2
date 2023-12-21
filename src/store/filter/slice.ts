import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterInitialState } from "../../models/Filter";

const initialState: FilterInitialState = {
  filter: {},
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.filter = {};
    },
    setFilter: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
  },
});

export const { resetFilter, setFilter } = slice.actions;

export default slice.reducer;
