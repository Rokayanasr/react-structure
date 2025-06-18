import { ProfileApi } from "@/Modules/Worker/services/profile/api/ProfileApi";
import { JobOffersApi } from "@/Modules/Worker/services/jobOffers/slices/JobOffers";
export const workerReducer = {
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [JobOffersApi.reducerPath]: JobOffersApi.reducer,
};

    export const workerMiddleware = [ProfileApi.middleware, JobOffersApi.middleware];
// ... existing code ...