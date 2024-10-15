import { TABAYAD_SESSION } from './../../utils/constant';
import { getCookie } from './../../utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogsSlice = createApi({
  reducerPath: 'blogsSlice',
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

  tagTypes: ['Blogs'],

  endpoints: builder => ({
    getAllBlogs: builder.query({
      query: ({ search, isFeature }) =>
        search ? `/blog?search=${search}` : isFeature ? '/blog?isFeature=true' : '/blog',
      providesTags: ['Blogs'],
    }),

    getBlogById: builder.query({
      query: id => `/blog/${id}`,
    }),

    createBlog: builder.mutation({
      query: data => ({
        url: '/blog',
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Blogs'],
    }),

    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: 'PUT',
        body: data,
      }),

      invalidatesTags: ['Blogs'],
    }),

    deleteBlog: builder.mutation({
      query: id => ({
        url: `/blog/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Blogs'],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsSlice;
