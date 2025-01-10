import { getCookie } from './../../utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationSlice = createApi({
  reducerPath: 'reservationSlice',
  baseQuery: fetchBaseQuery({
    prepareHeaders: headers => {
      const token = getCookie('tabayad-session-token');

      const tokens = token ? JSON.parse(token) : null;

      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      if (tokens) {
        headers.set('x-auth-token', `Bearer ${tokens}`);
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
        url: `/property/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Reservations'],
    }),
  }),
});

export const { useGetAllReservationsQuery, useUpdateReservationMutation } =
  reservationSlice;
