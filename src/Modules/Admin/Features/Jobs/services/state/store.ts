import { jobApi } from "../Api/JobsApi";


export const jobReducer = {
  [jobApi.reducerPath]: jobApi.reducer,
};
export const jobMiddleware = [jobApi.middleware];