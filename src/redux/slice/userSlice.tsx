import { TABAYAD_SESSION } from './../../utils/constant';
import { getCookie } from './../../utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({
    prepareHeaders: headers => {
      const user = getCookie(TABAYAD_SESSION);
      const token = user ? JSON.parse(user).refreshToken : null;
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['Post', 'Put'],

  endpoints: builder => ({
    dashboardAnalytics: builder.query({
      query: () => 'property/dashboard/all',
    }),

    getAllUsers: builder.query({
      query: ({ search }) =>
        search ? `user/get-users?query=${search}` : 'user/get-users',
      providesTags: ['Post'],
    }),

    getAllDoctors: builder.query({
      query: ({ search }) =>
        search ? `property/get-all?query=${search}` : 'property/get-all',
      providesTags: ['Post'],
    }),

    getAllComplain: builder.query({
      query: () => 'complain',
      providesTags: ['Post'],
    }),

    getProgress: builder.query({
      query: () => 'property/dashboard/all',
      providesTags: ['Post'],
    }),

    deleteUser: builder.mutation({
      query: id => ({
        url: `/auth/delete-user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),

    deleleProperties: builder.mutation({
      query: id => ({
        url: `/property/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/auth/update-user/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useDelelePropertiesMutation,
  useGetAllDoctorsQuery,
  useDashboardAnalyticsQuery,
  useUpdateUserMutation,
  useGetProgressQuery,
  useGetAllComplainQuery,
} = userSlice;
