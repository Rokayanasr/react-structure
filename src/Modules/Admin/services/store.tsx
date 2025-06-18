import { jobApi } from "../Features/Jobs/services/Api/JobsApi";
import { LocationApi } from "../Features/Jobs/services/Api/LocationApis";
import { permanentApi } from "../Features/Employers/services/api/PermanentApi";
import { botenApi } from "../Features/Services/services/api/BotenApi";
import { reinigungApi } from "../Features/Services/services/api/ReinigungApi";


export const adminReducer = {
  [LocationApi.reducerPath]: LocationApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
  [permanentApi.reducerPath]: permanentApi.reducer,
  [botenApi.reducerPath]: botenApi.reducer,
  [reinigungApi.reducerPath]: reinigungApi.reducer,

};

  export const adminMiddleware = [
    LocationApi.middleware,
    jobApi.middleware,
    permanentApi.middleware ,
    botenApi.middleware,
    reinigungApi.middleware
  ];
