import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '@/redux/store';

export const cookbookApi = createApi({
  reducerPath: 'cookbook',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginUserMutation } = cookbookApi;