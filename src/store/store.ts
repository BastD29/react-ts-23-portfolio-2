import { configureStore } from "@reduxjs/toolkit";

import { projectApi } from "./project/apiSlice";

import filterReducer from "./filter/slice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
