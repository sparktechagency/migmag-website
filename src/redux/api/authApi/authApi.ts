import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
    CreateNewPasswordPayload,
    CreateNewPasswordResponse,
    LoginApiResponse,
    LoginPayload,
    ProfileUpdatePayload,
    ProfileUpdateResponse,
    RegisterOtpVerifyPayload,
    RegisterOtpVerifyResponse,
    RegisterPayload,
    RegisterUserResponse,
    ResendOtpPayload,
    ResendOtpVerifyResponse, UserProfileApiResponse,
} from "@/utility/api-type/auth-api-type";

const authApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // registration user
        registerUser: builder.mutation<RegisterUserResponse, RegisterPayload>({
            query: (payload) => ({
                url: "/register",
                method: "POST",
                body: JSON.stringify(payload),
            }),
            invalidatesTags: ['User'],
        }),

        // otp verify
        registerOtpVerify: builder.mutation<RegisterOtpVerifyResponse, RegisterOtpVerifyPayload>({
            query: (payload) => ({
                url: "/otp-verify",
                method: "POST",
                body: JSON.stringify(payload),
            }),
            invalidatesTags: ['User'],
        }),

        // resend otp
        resendOtp: builder.mutation<ResendOtpVerifyResponse, ResendOtpPayload>({
            query: (email) => ({
                url: `/resend-otp?email=${email}`,
                method: "POST",
            }),
            invalidatesTags: ['User'],
        }),

        // create new password
        createNewPassword: builder.mutation<CreateNewPasswordResponse, CreateNewPasswordPayload>({
            query: (payload) => ({
                url: "/create-new-password",
                method: "POST",
                body: JSON.stringify(payload),
            }),
            invalidatesTags: ['User'],
        }),

        // login
        loginUser: builder.mutation<LoginApiResponse, LoginPayload>({
            query: (payload) => ({
                url: "/login",
                method: "POST",
                body: JSON.stringify(payload),
            }),
            invalidatesTags: ['User'],
        }),

        // update profile
        updateProfile: builder.mutation<ProfileUpdateResponse, ProfileUpdatePayload>({
            query: (payload) => ({
                url: "/update-profile?_method=PUT",
                method: "POST",
                body: JSON.stringify(payload),
            }),
            invalidatesTags: ['User'],
        }),

        // profile
        userProfile: builder.query({
            query: () => "/profile"
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
} = authApi;

export default authApi;
