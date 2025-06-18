import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ReinigungResponse, Reinigung } from "../../types/ReinigungTypes";

export const reinigungApi = createApi({         
    reducerPath: "reinigungApi",
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["Reinigung"],
    endpoints: (builder) => ({
        getReinigungs: builder.query<ReinigungResponse, { per_page: number; page: number }>({
        query: ({ per_page, page }) => ({
            url: `/admin/reinigung-service?per_page=${per_page}&page=${page}`,
            method: "GET",
        }),
        providesTags: ["Reinigung"],
        }),
        getReinigungById: builder.query<Reinigung, number>({
        query: (id) => ({
            url: `/admin/reinigung-service/${id}`,
            method: "GET",
        }),
        }),
    }),
    });
export const { useGetReinigungsQuery, useGetReinigungByIdQuery } = reinigungApi;