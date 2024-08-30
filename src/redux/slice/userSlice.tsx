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
    getAllUsers: builder.query({
      query: isVerified =>
        isVerified
          ? `/auth/get-users?role=patient&isVerified=${isVerified}`
          : '/auth/get-users?role=patient',
      providesTags: ['Post'],
    }),

    getAllDoctors: builder.query({
      query: ({ isVerified, isDoctorVerified }) =>
        isVerified !== undefined && isVerified !== null
          ? `/auth/get-users?role=doctor&isVerified=${isVerified}`
          : isDoctorVerified !== undefined && isDoctorVerified !== null
            ? `/auth/get-users?isDoctorVerified=${isDoctorVerified}&role=doctor`
            : isVerified && isDoctorVerified
              ? `/auth/get-users?isDoctorVerified=${isDoctorVerified}&role=doctor&isVerified=${isVerified}`
              : '/auth/get-users?role=doctor',
      providesTags: ['Post'],
    }),

    deleteUser: builder.mutation({
      query: id => ({
        url: `/auth/delete-user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetAllUsersQuery, useDeleteUserMutation, useGetAllDoctorsQuery } =
  userSlice;
