import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { profileApiResponse, User } from "@/Modules/Owner/Features/Profile/types/profile.type";

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["profile"],
    endpoints: (builder) => ({
        postProfile: builder.mutation<profileApiResponse, FormData>({
            query: (formData) => ({
                url: "pharmacy-owner/profile",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["profile"],
        }),
        getProfile: builder.query<User, void>({ 
            query: () => ({
                url: "pharmacy-owner/profile",
                method: "GET",
            }),
            transformResponse: (response: profileApiResponse) => response.data.user,
            providesTags: ["profile"],
        })
    }),
});

export const { usePostProfileMutation, useGetProfileQuery } = profileApi;
