import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from '@/types';
import {HYDRATE} from 'next-redux-wrapper';
import {RootState} from '@/redux/store';
import jwtDecode from 'jwt-decode';

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export type DecodedJWT = {
  iat: number;
  exp: number;
  sub: number;
}

export interface AuthState {
  token: Nullable<string>;
  user: Nullable<User>;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearAuth: (state: AuthState, action: PayloadAction) => {
      state.token = null;
      state.user = null;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE REDUCER RUNNING', action.payload.auth);
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  }
});

export const { setToken, setUser, clearAuth } = authSlice.actions;

const selectRawToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = createSelector(
  selectRawToken,
  token => {
    if (!token) {
      return null;
    }

    try {
      return jwtDecode<DecodedJWT>(token);
    } catch (err) {
      console.error('Unable to decode JWT', err);
      return null;
    }
  }
);

export default authSlice.reducer;