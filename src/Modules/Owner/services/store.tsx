import { branchesApi } from "./branches/branchesApi";
import { profileApi } from "./profile/api/profileApi";

export const ownerReducer = {
    [profileApi.reducerPath]: profileApi.reducer,
    [branchesApi.reducerPath]: branchesApi.reducer,
};

export const ownerMiddleware = [profileApi.middleware, branchesApi.middleware];
