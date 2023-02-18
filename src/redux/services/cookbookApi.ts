import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const cookbookApi = createApi({
  reducerPath: 'cookbook',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
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