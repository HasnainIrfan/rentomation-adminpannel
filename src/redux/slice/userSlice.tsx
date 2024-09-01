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
      query: () => '/dashboard/all-analytics',
    }),

    getAllUsers: builder.query({
      query: ({ isVerified, search }) =>
        isVerified !== undefined && isVerified !== null
          ? `/auth/get-users?role=patient&isVerified=${isVerified}`
          : search
            ? `/auth/get-users?role=patient&query=${search}`
            : '/auth/get-users?role=patient',
      providesTags: ['Post'],
    }),

    getAllDoctors: builder.query({
      query: ({ isVerified, isDoctorVerified, search }) =>
        isVerified !== undefined && isVerified !== null
          ? `/auth/get-users?role=doctor&isVerified=${isVerified}`
          : isDoctorVerified !== undefined && isDoctorVerified !== null
            ? `/auth/get-users?isDoctorVerified=${isDoctorVerified}&role=doctor`
            : isVerified && isDoctorVerified
              ? `/auth/get-users?isDoctorVerified=${isDoctorVerified}&role=doctor&isVerified=${isVerified}`
              : search
                ? `/auth/get-users?role=doctor&query=${search}`
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
  useGetAllDoctorsQuery,
  useDashboardAnalyticsQuery,
  useUpdateUserMutation,
} = userSlice;
