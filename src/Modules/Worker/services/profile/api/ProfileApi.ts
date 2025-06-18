import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import {  ProfileResponse } from "@/Modules/Worker/Features/Profile/types/profile.type";
import { User } from "@/Modules/Worker/Features/Profile/types/profile.type";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ProfileApi = createApi({
    reducerPath: "ProfileApi",
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["Profile"],
    endpoints: (builder) => ({
        getProfile: builder.query<User, void>({
            query: () => ({
                url: "pharmacist-worker/profile",
                method: "GET",
            }),
            transformResponse: (response: ProfileResponse) => response.data.user,
            providesTags: ["Profile"],
        }),
        updateProfile: builder.mutation<ProfileResponse, FormData>({
            query: (FormData) => ({
                url: "pharmacist-worker/profile/update",
                method: "POST",
                body: FormData,
               
                    
            }),
            invalidatesTags: ["Profile"],
        }),
        changePassword: builder.mutation<ProfileResponse, { current_password: string; new_password: string ,confirm_password: string}>({
            query: (data) => ({
                url: "pharmacist-worker/change-password",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } = ProfileApi;

// ... existing code ...