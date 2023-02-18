import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from '@/types';
import {HYDRATE} from 'next-redux-wrapper';

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
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
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  }
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;