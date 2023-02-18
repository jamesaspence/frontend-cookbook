import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { cookbookApi } from '@/redux/cookbookApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      [cookbookApi.reducerPath]: cookbookApi.reducer,
    },
    middleware: defaultMiddleware => defaultMiddleware().concat(cookbookApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });