import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: headers => {
      // const token = getCookies("fit_form_token");
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      // if (token) {
      //     headers.set("x-auth-token", `${token}`);
      // }
      return headers;
    },
  }),
  endpoints: builder => ({
    userById: builder.query({
      query: id => `/user/${id}`,
    }),
  }),
});

export const { useUserByIdQuery } = userSlice;
