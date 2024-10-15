import { TABAYAD_SESSION } from './../../utils/constant';
import { getCookie } from './../../utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serviceSlice = createApi({
  reducerPath: 'serviceSlice',
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

  tagTypes: ['Service'],

  endpoints: builder => ({
    getAllServices: builder.query({
      query: ({ search, isFeature }) =>
        search
          ? `/service?search=${search}`
          : isFeature
            ? '/service?isFeature=true'
            : '/service',
      providesTags: ['Service'],
    }),

    getAllServiceById: builder.query({
      query: id => `/service/${id}`,
    }),

    createService: builder.mutation({
      query: data => ({
        url: '/service',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Service'],
    }),

    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/service/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Service'],
    }),

    deleteService: builder.mutation({
      query: id => ({
        url: `/service${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Service'],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetAllServiceByIdQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceSlice;
