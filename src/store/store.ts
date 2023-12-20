import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./project/apiSlice";

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

export { store };