import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse, RestRequest } from "../../types/auth.type";
import Cookies from "js-cookie";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL, 
  }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data: LoginRequest) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation<void,{ email: string }>({
      query: (data:{ email: string }) => ({
        url: `/auth/password/forgot`,
        method: "POST",
        body:data
      }),
    }),
    restPassword: builder.mutation<void, RestRequest>({
      query: (data) => ({
        url: `auth/password/reset`,
        method: "POST",
                body:data

      }),
    }),
    VerifyOtp: builder.mutation<void,{email:string,otp:string}>({
      query: (data) => ({
        url: `auth/password/verify-otp`,
        method: "POST",
        body:data
      }),
    }),
    logout: builder.mutation<{status:number}, void>({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
        headers:{
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useRestPasswordMutation,
  useVerifyOtpMutation,
  useLogoutMutation,
} = AuthApi;
