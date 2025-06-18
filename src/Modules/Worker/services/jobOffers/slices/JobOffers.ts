
import { baseQueryWithErrorHandling } from "@/services/guard/Interceptor";
import { createApi } from "@reduxjs/toolkit/query/react";
import { JobOffersResponse, JobOffer, JobOfferResponse } from "@/Modules/Worker/Features/JobOffers/types/jobOffers.type";   

export const JobOffersApi = createApi({
    reducerPath: "JobOffersApi",
    // ... existing code ...
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["JobOffers"],
    endpoints: (builder) => ({
        getJobOffers: builder.query<JobOffer[], void>({
            query: () => ({
                url: "pharmacist-worker/job-offers",
                method: "GET",
            }),
            transformResponse: (response: JobOffersResponse) => response.data,
            providesTags: ["JobOffers"],
        }),
        getJobOfferById: builder.query<JobOffer, string>({
            query: (id:string|undefined) => ({
                url: `/pharmacist-worker/job-offers/${id}`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            transformResponse: (response: JobOfferResponse) => response.data,
            providesTags: ["JobOffers"],
        }),
       
      
    }),
});

export const { useGetJobOffersQuery, useGetJobOfferByIdQuery } = JobOffersApi;

