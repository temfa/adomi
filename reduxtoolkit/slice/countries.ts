import { createSlice } from "@reduxjs/toolkit";
const countriesSlice = createSlice({
  name: "countries",
  initialState: {},
  reducers: {
    setCountries: (state, { payload }) => {
      return payload;
    },
    clearCountries: () => {
      return "";
    },
  },
});

const { reducer, actions } = countriesSlice;
export const { setCountries, clearCountries } = actions;
export default reducer;
