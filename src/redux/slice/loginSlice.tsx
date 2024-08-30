import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginSlice = createApi({
  reducerPath: 'loginSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: userData => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginSlice;
