import {
  configureStore
} from "@reduxjs/toolkit";
import playerReducer from "./Reducers/Todo";
import musicApiReducer, {
  musicApi
} from "./api/music"

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [musicApi.reducerPath]: musicApiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
});
