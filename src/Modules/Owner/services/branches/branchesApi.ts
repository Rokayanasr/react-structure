import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Branch, BranchesResponse } from "../../Features/Branches/types/branches.types";
import { ApiResponse } from "@/constants/api.types";

export const branchesApi = createApi({
    reducerPath: "branchesApi",
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["Branches"],
    endpoints: (builder) => ({
        getAllBranches: builder.query<BranchesResponse, void>({
            query: () => ({
                url: "/pharmacy-owner/branches",
                method: "GET",
            }),
            providesTags: ["Branches"],
        }),
        createBranch: builder.mutation({
            query: (newBranch) => ({
                url: "/branches",
                method: "POST",
                body: newBranch,
            }),
            invalidatesTags: ["Branches"],
        }),
        getBranchById: builder.query<ApiResponse<Branch>, number>({
            query: (id) => ({
                url: `/pharmacy-owner/branches/${id}`,
                method: "GET",
            }),
            providesTags: ["Branches"],
        }),
        updateBranch: builder.mutation({
            query: ({ id, ...branch }) => ({
                url: `/pharmacy-owner/branches/${id}`,
                method: "PUT",
                body: branch,
            }),
            invalidatesTags: ["Branches"],
        }),
    }),
});

export const { useGetAllBranchesQuery, useCreateBranchMutation, useGetBranchByIdQuery, useUpdateBranchMutation } = branchesApi;
