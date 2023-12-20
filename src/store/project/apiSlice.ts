import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Project } from "../../models/Project";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => {
        return "projects";
      },
    }),
    getProjectById: builder.query({
      query: (id) => {
        return `projects/${id}`;
      },
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectByIdQuery } = projectApi;
