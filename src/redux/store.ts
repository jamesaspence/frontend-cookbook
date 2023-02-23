import { configureStore } from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import { cookbookApi } from '@/redux/services/cookbookApi';
import authReducer from '@/redux/slices/auth';
import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import {parseBoolean} from '@/util/boolean';

export const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      [cookbookApi.reducerPath]: cookbookApi.reducer,
      auth: authReducer,
    },
    middleware: defaultMiddleware => defaultMiddleware()
      .prepend(nextReduxCookieMiddleware({
        subtrees: ['auth']
      })).concat(cookbookApi.middleware),
  }));

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

const debug = parseBoolean(process.env.NEXT_PUBLIC_DEBUG_REDUX);

console.log('debug', (debug ? 'YES': 'NO'));

export const wrapper = createWrapper<AppStore>(makeStore, { debug });