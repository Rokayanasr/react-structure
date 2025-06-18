import { fetchBaseQuery, FetchArgs } from "@reduxjs/toolkit/query";
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

const baseUrl: string = import.meta.env.VITE_BACKEND_URL;

const token =Cookies.get("token")
// ... existing code ...

export const baseQueryWithErrorHandling = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: unknown
) => {
  const result = await fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers: Headers) => {
   if (token) {
       headers.set("Authorization", `Bearer ${token}`);
    
   }
      return headers;
    },
  })(args as FetchArgs, api, extraOptions as { getState: () => unknown; endpoint: string });

  if (result.error) {
    console.error("Error:", result.error);

    if (result.error.status === 401) {
        Cookies.remove("token")
         Cookies.remove("role");

    }
  }

  return result;
};