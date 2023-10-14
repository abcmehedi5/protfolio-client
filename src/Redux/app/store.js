import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../features/api/baseAPI";

export const store = configureStore({
  reducer: {},

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
