// registration types

import {appendFile} from "node:fs";

export interface RegisterUserResponse {
    success: boolean;
    message: string;
    data: {
        full_name: string;
        email: string;
        updated_at: string;
        created_at: string;
        id: number
    }
}

export interface RegisterPayload {
    full_name : string;
    email : string;
    password : string;
    password_confirmation : string;
}
// login types

export type LoginPayload = {
    email: string;
    password: string;
};

export interface User {
    id: number;
    full_name: string;
    last_name: string;
    email: string;
    contact: string | null;
    location: string | null;
    avatar: string;
    role: "USER" | "ADMIN"; // extend if more roles exist
    is_banned: boolean;
    otp: string | null;
    otp_expires_at: string | null;
    otp_verified_at: string;
    created_at: string;
    updated_at: string;
}

export type LoginApiResponse = {
    success : boolean;
    data : {
        user : User,
        token : string,
    };
    message : string;
}

// register otp verify api

export interface RegisterOtpVerifyPayload   {
    email : string;
}

export interface RegisterOtpVerifyResponse {
    success : boolean;
    message : string;
    data : {
        user : {
            id: number;
            full_name: string;
            email: string;
            avatar: string;
            is_banned: boolean;
            otp?: number | null;
            created_at: string;
            updated_at: string;
        },
        token : string,
    }
}




// resend otp api


export interface ResendOtpPayload {
    email?: string ;
}
export interface ResendOtpVerifyResponse {
    success : boolean;
    message : string;
    data : {
        id : number;
        full_name : string;
        email : string;
        avatar : string;
        role : "USER" | "ADMIN";
        is_banned : boolean;
        otp : string;
        created_at : string;
        updated_at : string;
    }
}


// create new password api

export interface CreateNewPasswordPayload {
    password : string;
    password_confirmation : string;
}

export interface CreateNewPasswordResponse {
    success : boolean;
    message : string;

}
// update profile

// export interface ProfileUpdatePayload {
//     full_name : string;
//     email : string;
//     contact : string | null;
//     location : null | string ;
//     // avatar : File | null;
// }
//
// export interface ProfileUpdateResponse {
//     success : boolean;
//     message : string;
//
// }


// user profile
export type UserProfile = {
    id: number;
    full_name: string;
    email: string;
    contact: string | null;
    location: string | null;
    avatar: string;
    role: 'USER' | 'ADMIN'; // add other roles if they exist
    is_banned: boolean;
    otp: string | null;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
};



// export type UserProfileApiResponse = {
//     success: boolean;
//     data: UserProfile;
//     message: string;
// };




















































































