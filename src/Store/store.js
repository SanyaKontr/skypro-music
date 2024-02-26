import {
  configureStore
} from "@reduxjs/toolkit";
import musicApiReducer, {
  musicApi
} from "./api/music"
import { trackReducer } from "./trackSlice";

export const store = configureStore({
  reducer: {
    player: trackReducer,
    [musicApi.reducerPath]: musicApiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
});
