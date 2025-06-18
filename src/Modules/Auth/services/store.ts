import { AuthApi } from "./api/AuthApis";

export const authReducer = {
  [AuthApi.reducerPath]: AuthApi.reducer,  






  
};

export const authMiddleware = [AuthApi.middleware];
