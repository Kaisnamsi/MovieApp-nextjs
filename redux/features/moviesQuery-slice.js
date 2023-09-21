import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    searchResults: new Array(),
  },
};

export const moviesquery = createSlice({
  name: "moviesquery",
  initialState,
  reducers: {
    updateSearchResults: (_, action) => {
      return {
        value: {
          searchResults: action.payload,
        },
      };
    },
  },
});

export const { updateSearchResults } = moviesquery.actions;
export default moviesquery.reducer;
