import {
  configureStore
} from "@reduxjs/toolkit";
import playerReducer from "./Reducers/Todo";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});