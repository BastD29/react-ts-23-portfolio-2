import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Project } from "../../models/Project";

type QueryArg =
  | {
      [key: string]: any;
    }
  | undefined;

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // getProjects: builder.query<Project[], void>({
    //   query: () => {
    //     return "projects";
    //   },
    // }),
    getProjects: builder.query<Project[], QueryArg>({
      query: (queryArg = {}) => {
        const query = new URLSearchParams(queryArg).toString();
        return `projects?${query}`;
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
