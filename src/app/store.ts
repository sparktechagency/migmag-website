import { configureStore } from "@reduxjs/toolkit";
import authApi from "@/redux/api/authApi/authApi";
import homeApi from "@/redux/api/home-api/homeApi";
import artistApi from "@/redux/api/artistApi/artistApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [homeApi.reducerPath]: homeApi.reducer,
        [artistApi.reducerPath]: artistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, homeApi.middleware, artistApi.middleware ),
});
