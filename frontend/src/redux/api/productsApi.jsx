import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url:"/products",
        params: {
          page :params?.page,
          keyword:params?.keyword,
          category: params?.category,
          "price[gte]" : params.min ,
          "price[lte]" : params.max ,
          "ratings[gte]" : params?.ratings ,
        }
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;
// time for which fetch data is stored in cache(reduc toolkit) in RTK query
    // keepUnusedDataFor:45 by default it is 60 sec
