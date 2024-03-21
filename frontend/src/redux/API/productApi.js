import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"/api/v1/"}),
    endpoints:(builder) =>({
        getProducts: builder.query({
            query:(prams) =>({
                url:"/products",
            }),
        }),
    }),
    // time for which fetch data is stored in cache(reduc toolkit) in RTK query
    // keepUnusedDataFor:45 by default it is 60 sec

});

export const {useGetProductsQuery} = productApi;