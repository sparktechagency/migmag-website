import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateNewPasswordPayload,
  CreateNewPasswordResponse,
  LoginApiResponse,
  LoginPayload,
  RegisterOtpVerifyPayload,
  RegisterOtpVerifyResponse,
  RegisterPayload,
  RegisterUserResponse,
  ResendOtpPayload,
  ResendOtpVerifyResponse,
} from "@/utility/api-type/auth-api-type";
import {
  FollowApiResponse,
  FollowListApiResponse,
  OrderApiResponse,
  UnfollowApiResponse,
  UserProfileApiResponse,
  WishListApiResponse,
  wishRemoveApiResponse,
} from "@/utility/api-type/homeApiType";

const authApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Accept", `*/*`);
      }

      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // registration user
    registerUser: builder.mutation<RegisterUserResponse, RegisterPayload>({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),

    // otp verify
    registerOtpVerify: builder.mutation<
      RegisterOtpVerifyResponse,
      RegisterOtpVerifyPayload
    >({
      query: (payload) => ({
        url: "/otp-verify",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),

    // resend otp
    resendOtp: builder.mutation<ResendOtpVerifyResponse, ResendOtpPayload>({
      query: (email) => ({
        url: `/resend-otp?email=${email}`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),

    // create new password
    createNewPassword: builder.mutation<
      CreateNewPasswordResponse,
      CreateNewPasswordPayload
    >({
      query: (payload) => ({
        url: "/create-new-password",
        method: "POST",
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["User"],
    }),

    // login
    loginUser: builder.mutation<LoginApiResponse, LoginPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),

    // ----------------------------------------------------------UPDATEPRoFile__________________
    // update profile
    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/update-profile",
        method: "POST", // or "PUT" if your API expects PUT
        body: formData,
        // Remove the Content-Type header - let the browser set it automatically
      }),
    }),
    // ----------------------------------------------------------UPDATEPRoFile__________________

    // profile
    userProfile: builder.query({
      query: () => "/profile",
    }),
    addWishList: builder.mutation<WishListApiResponse, { songId: number }>({
      query: (songId) => ({
        url: `/create-wishlist/${songId}`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    removeWish: builder.mutation<wishRemoveApiResponse, { songId: number }>({
      query: (songId) => ({
        url: `/remove-wishlist/${songId}`,
        method: "POST",
      }),
    }),

    wishList: builder.query({
      query: () => ({
        url: `/wishlist`,
        method: "GET",
      }),
    }),

    addFollow: builder.mutation<FollowApiResponse, { id: string }>({
      query: (id) => ({
        url: `/follow/${id}`,
        method: "POST",
      }),
    }),
    unFollow: builder.mutation<UnfollowApiResponse, { id: string }>({
      query: (id) => ({
        url: `/unfollow/${id}`,
        method: "PATCH",
      }),
    }),
    followList: builder.query<FollowListApiResponse, void>({
      query: () => ({
        url: "/follow",
        method: "GET",
      }),
    }),
    support: builder.mutation({
      query: (payload) => ({
        url: "/support",
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),
    // checkout api
    createPaymentIntent: builder.mutation({
      query: (payload) => ({
        url: `/create-payment-intent`,
        method: "POST",
        body: payload,
      }),
    }),
    paymentSuccessApi: builder.mutation<OrderApiResponse, void>({
      query: (payload) => ({
        url: "/create-order",
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),
    userOrderApi: builder.query({
      query: () => ({
        url: "/user-orders",
        method: "GET",
      }),
    }),
    userProfileApi: builder.query<UserProfileApiResponse, void>({
      query: () => "/profile", // shortcut syntax
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRegisterOtpVerifyMutation,
  useResendOtpMutation,
  useCreateNewPasswordMutation,
  useUpdateProfileMutation,
  useUserProfileQuery,
  useAddWishListMutation,
  useRemoveWishMutation,
  useAddFollowMutation,
  useUnFollowMutation,
  useWishListQuery,
  useFollowListQuery,
  useSupportMutation,
  useCreatePaymentIntentMutation,
  usePaymentSuccessApiMutation,
  useUserOrderApiQuery,
  useUserProfileApiQuery,
} = authApi;

export default authApi;
