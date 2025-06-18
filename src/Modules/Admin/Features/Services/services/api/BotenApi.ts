import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { createApi } from "@reduxjs/toolkit/query/react";
import { BotenResponse, Boten } from "../../types/BotenTypes";


export const botenApi = createApi({
  reducerPath: "botenApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Boten"],
  endpoints: (builder) => ({
    getBotens: builder.query<BotenResponse, { per_page: number; page: number }>({
      query: ({ per_page, page }) => ({
        url: `/admin/boten-service?per_page=${per_page}&page=${page}`,
        method: "GET",
      }),
      providesTags: ["Boten"],
    }),
    getBotenById: builder.query<Boten, number>({
      query: (id) => ({
        url: `/admin/boten/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetBotensQuery, useGetBotenByIdQuery } = botenApi;