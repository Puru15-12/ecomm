
import{configureStore} from"@reduxjs/toolkit";
import { productApi } from "./api/productsApi";

export const store = configureStore({
    reducer:{
        [productApi.reducerPath]  : productApi.reducer,
    },
    middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([productApi.middleware]),
}); 

import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware
    ]),
});
