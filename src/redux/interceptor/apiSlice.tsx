import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setMessage } from "../reducer/commonResMessage";
const baseQuery = fetchBaseQuery({
  baseUrl: " ",
  prepareHeaders: async (headers: any, {  endpoint }: any) => {
  console.log("hello request")
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  nprogress.start(api);

  let result: any = await baseQuery(args, api, extraOptions);
  console.log(result,"response")

  nprogress.complete(api);
  return result;
};

const nprogress = {
  counter: 0,
  start: function (api: any) {
    this.counter++;
    this.counter > 0 &&
      api?.endpoint !== "getMatchingItems" &&
      api?.endpoint !== "getSimilarItems"
     
  },
  complete: function (api: any) {
    this.counter--;
   
  },
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder:any) => ({}),
});
