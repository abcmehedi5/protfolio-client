import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    // get all projects
    getProjects: builder.query({
      query: () => "/projects",
    }),

    // get single Project
    getSingleProject: builder.query({
      query: (id) => `/projects/${id.id}`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetSingleProjectQuery } = baseApi;
export default baseApi;
