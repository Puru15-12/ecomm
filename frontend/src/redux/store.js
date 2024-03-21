import{configureStore} from"@reduxjs/toolkit";
import { productApi } from "./API/productApi";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reducer:{
        [productApi.reducerPath]  : productApi.reducer,
    },
    middleware : (buildGetDefaultMiddleware) => 
      buildGetDefaultMiddleware().concat(productApi.middleware),
}); 