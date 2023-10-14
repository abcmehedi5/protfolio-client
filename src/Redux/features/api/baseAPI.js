import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => {
    getProjects: builder.query({
      query: () => "/projects",
    });
  },
});

export const { use } = baseApi;
export default baseApi;
