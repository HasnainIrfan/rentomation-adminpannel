import { TABAYAD_SESSION } from './../../utils/constant';
import { getCookie } from './../../utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationSlice = createApi({
  reducerPath: 'reservationSlice',
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

  tagTypes: ['Reservations'],

  endpoints: builder => ({
    getAllReservations: builder.query({
      query: ({ search, status, page, limit }) =>
        search && search !== null && search !== ''
          ? `/booking?search=${search}&page=${page}&limit=${limit}`
          : status !== undefined && status !== null
            ? `booking?status=${status}&page=${page}&limit=${limit}`
            : `/booking?page=${page}&limit=${limit}`,
      providesTags: ['Reservations'],
    }),

    updateReservation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/booking/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Reservations'],
    }),
  }),
});

export const { useGetAllReservationsQuery, useUpdateReservationMutation } =
  reservationSlice;
