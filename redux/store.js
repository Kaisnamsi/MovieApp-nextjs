import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth-slice";
import moviesqueryReducer from "./features/moviesQuery-slice";

export const store = configureStore({
  reducer: {
    authReducer,
    moviesqueryReducer,
  },
});
