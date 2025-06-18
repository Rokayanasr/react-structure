import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { createApi } from "@reduxjs/toolkit/query/react";
import { PermanentPositionsResponse , PermanentPosition } from "../../types/PermanentTypes";



export const permanentApi = createApi({
  reducerPath: "permanentApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Permanent"],
  endpoints: (builder) => ({
    getPermanents: builder.query<PermanentPositionsResponse, { per_page: number; page: number }>({
      query: ({ per_page, page }) => ({
        url: `/admin/permanent-positions?per_page=${per_page}&page=${page}`,
        method: "GET",
      }),
      providesTags: ["Permanent"],
    }),
    getPermanentById: builder.query<PermanentPosition, number>({
      query: (id) => ({
        url: `/admin/permanent-positions/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetPermanentsQuery , useGetPermanentByIdQuery} = permanentApi;