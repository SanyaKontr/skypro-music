import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/Todo";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});