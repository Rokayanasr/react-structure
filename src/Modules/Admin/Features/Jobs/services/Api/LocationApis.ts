import { locationRequest, locationResponse } from "@/Modules/Admin/Features/Jobs/types/location.types";
import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { createApi } from "@reduxjs/toolkit/query/react";

export const LocationApi = createApi({
  reducerPath: "LocationApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["location"],
  endpoints: (builder) => ({
    CreateJobLocation: builder.mutation<locationResponse, locationRequest>({
      query: (data) => ({
        url: "/admin/job-location",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["location"],
    }),
    UpdateJobLocation: builder.mutation<locationResponse, { id: number, data: locationRequest }>({
      query: ({ id, data }) => ({
        url: `/admin/job-location/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["location"],
    }),
    DeleteJobLocation: builder.mutation<locationResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/admin/job-location/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["location"],
    }),
    GetJobLocation: builder.query<locationResponse, { per_page: number, page: number }>({
      query: ({ per_page, page }) => ({
        url: `/admin/job-location?per_page=${per_page}&page=${page}`,
        method: "GET",
      }),
      providesTags: ["location"],
    }),
  }),
});

export const { useCreateJobLocationMutation, useGetJobLocationQuery, useUpdateJobLocationMutation, useDeleteJobLocationMutation } =
  LocationApi;
