import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Products } from "../models/products";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:6500/api/v1/",
  }),
  tagTypes: ["Posts", "Post", "User"],
  endpoints: (build) => ({
    getProducts: build.query<Products, void>({
      query: () => `products`,
      transformResponse: (response: { data: Products }, meta, arg) =>
        response.data,
    }),
  }),
});

export const { useGetProductsQuery } = api;
