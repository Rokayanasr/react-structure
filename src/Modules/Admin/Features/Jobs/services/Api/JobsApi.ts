import { JobType, JobTypesResponse, CreateJobTypeDto } from '../../types/jobType';
import { baseQueryWithErrorHandling } from '@/services/guard/Interceptor';
import { createApi } from '@reduxjs/toolkit/query/react';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['JobTypes'],
  endpoints: (builder) => ({
    getJobTypes: builder.query<JobTypesResponse, { per_page: number, page: number }>({
      query: ({ per_page, page }) => ({
        url: `/admin/job-types?per_page=${per_page}&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['JobTypes'],
    }),
    createJobType: builder.mutation<JobType, CreateJobTypeDto>({
      query: (data) => ({
        url: '/admin/job-types',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['JobTypes'],
    }),
    updateJobType: builder.mutation<void, { id: number; data: CreateJobTypeDto }>({
      query: ({ id, data }) => ({
        url: `admin/job-types/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['JobTypes'],

    }),

    deleteJobType: builder.mutation<void, number>({
      query: (id) => ({
        url: `/admin/job-types/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['JobTypes'],
    }),
  }),
});

export const {
  useGetJobTypesQuery,
  useCreateJobTypeMutation,
  useUpdateJobTypeMutation,
  useDeleteJobTypeMutation,
} = jobApi;
