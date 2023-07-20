import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieResponse } from "../type";

const BASE_URL = process.env.REACT_APP_TMDB_ENDPOINT;
const token = process.env.REACT_APP_ACCESS_TOKEN;

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDiscoverList: builder.query<MovieResponse, string>({
      query: (type) => `/discover/${type}`,
    }),
  }),
});

export const { useGetDiscoverListQuery } = movieAPI;
