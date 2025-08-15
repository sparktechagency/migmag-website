export interface TopArtistType {
    id: string;
    name: string;
    singer: boolean;
    singer_writer: boolean;
    location: string;
    description: string;
    gender: string;
    profile: string;
}

export interface artistData {
    id: string;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    is_wishlisted: number;
    is_followed: number;
    created_at: string;
    updated_at: string;
}

export interface TopArtistListApiResponse {
    success: boolean;
    message: string;
    current_page: number;
    data: {
        data: artistData[]
    }
}


export interface Artist {
    id: number;
    name: string;
    singer: string;
    singer_writer: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    is_wishlisted: number;
    is_followed: number;
    created_at: string;
    updated_at: string;
}


// Latest Trending Vocals Api

export interface Genre {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Key {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface License {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Type {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Song {
    id: number;
    title: string;
    song_poster: string;
    song: string;
    artist_id: number;
    genre_id: number;
    key_id: number;
    license_id: number;
    type_id: number;
    gender: string;
    bpm: number;
    price: string;
    is_published: number;
    created_at: string;
    updated_at: string;
    artist: Artist;
    genre: Genre;
    key: Key;
    license: License;
    type: Type;
}

export interface TrendingSongsResponse {
    success: boolean;
    data: {
        data: Song[]
    };
    message: string;
}

// Genre api response

export interface GenreApiResponse {
    success: boolean;
    data: Genre[];
    message: string;
}


// song details api type


export interface SongDetailsApiResponse {
    success: boolean;
    data: {
        id: number;
        title: string;
        song_poster: string;
        song: string;
        artist_id: number;
        genre_id: number;
        key_id: number;
        license_id: number;
        type_id: number;
        gender: string;
        bpm: number;
        price: string;
        is_published: number;
        created_at: string;
        updated_at: string;
        artist: Artist;
        genre: Genre;
        key: Key;
        license: License;
        type: Type;
        is_wishlisted: number;
    };
    message: string;
}

// export interface SongDetails {
//
// }

// wishlist add api

export interface WishListApiResponse {
    success: boolean;
    data: {
        id: number;
        user_id: number;
        artist_id: string;
        is_wishlisted: boolean;
        updated_at: string;
        created_at: string;
    },
    message: string;
}

export interface payload {
    id: number;
}

export interface errorResponse {
    success: boolean;
    message: string;
}


// artist details type

interface songArtist {
    id: number;
    title: string;
    song_poster: string;
    song: string;
    artist_id: number;
    genre_id: number;
    key_id: number;
    license_id: number;
    type_id: number;
    gender: string;
    bpm: number;
    price: string;
    is_published: number;
    created_at: string;
    updated_at: string;
    artist: Artist;
    genre: Genre;
    key: Key;
    license: License;
    type: Type;
}

export interface ArtistDetailsApiResponse {
    success: boolean;
    message: string;
    data: {
        artist: {
            id: number;
            name: string;
            singer: string;
            singer_writer: string;
            location: string;
            description: string;
            gender: string;
            profile: string;
            is_wishlisted: number;
            is_followed: number;
            created_at: string;
            updated_at: string;
            songs_count: number;
        },
        songs: songArtist[]
    };

}

// Wish remove api response

export interface wishRemoveApiResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        user_id: number;
        song_id: number;
        is_wishlisted: boolean;
        created_at: string;
        updated_at: string;
    }
}


// follow api response

export interface FollowApiResponse {
    success: boolean;
    message: string;
    data: {
        user_id: number;
        artist_id: number;
        is_followed: boolean;
        updated_at: string;
        created_at: string;
    }
}


// unfollow api response

export interface UnfollowApiResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        user_id: number;
        artist_id: number;
        is_followed: boolean;
        updated_at: string;
        created_at: string;
    }
}


interface artist {
    id: number;
    user_id: number;
    artist_id: number;
    is_followed: number;
    created_at: string;
    updated_at: string;
    artist: {
        id: number;
        name: string;
        singer: string;
        singer_writer: string;
        location: string;
        description: string;
        profile: string;
        gender: string;
        is_wishlisted: number;
        is_followed: number;
        created_at: string;
        updated_at: string;
    }
}

export interface FollowListApiResponse {
    success: boolean;
    data: {
        current_page: number;
        data: artist[]
    }
}


// ORDER API RESPONSE

export interface OrderApiResponse {
    success: boolean;
    data: {
        order: {
            user_id: number;
            order_number: string;
            total_amount: number;
            status: string;
            updated_at: string;
            created_at: string;
            id: number;
        }
        transaction: {
            order_id: number;
            amount: number;
            currency: string;
            status: string;
            payment_method: string;
            updated_at: string;
            created_at: string;
            id: number;
        }
    }
}

// order api

// order_details
// interface orderDetails {
//     id : number;
//     order_id : number;
//     song_id : number;
//     quantity : number;
//     price : string;
//     total : string;
//     created_at : string;
//     updated_at: string;
//     song : {
//         id: number;
//         title : string;
//         song_poster: string;
//         song : string;
//         artist_id : number;
//         genre_id: number;
//         key_id: number;
//         license_id: number;
//         type_id: number;
//         gender : string;
//         bpm : number;
//         price : string;
//         is_published : number;
//         is_wishlisted : number;
//         created_at : string;
//         updated_at: string;
//     }
// }

// interface orderData {
//     id : number;
//     user_id: number;
//     order_number : string;
//     total_amount : number;
//     status : string;
//     created_at : string;
//     updated_at : string;
//     user : {
//         id: number;
//         full_name :string;
//         email :string;
//         avatar : string;
//         role : string;
//         is_banned : boolean;
//         otp : string|null;
//         created_at : string;
//         updated_at : string;
//     },
//     order_details : {
//
//     }
// }
//
// export interface OrderApiResponse {
//     success: boolean;
//     data : {
//         current_page : number;
//     }
// }


// user profile api
export interface UserProfileApiResponse {
    success: boolean;
    data: {
        id: number;
        full_name: string;
        email: string;
        contact: string | null;
        location: string | null;
        avatar: string | undefined;
        role: string;
        is_banned: boolean;
        otp: string | null;
        created_at: string;
        updated_at: string;
    },
    message: string;
}


// contact api
export interface ContactApiPayloadType {
    email: string;
    title: string;
    type: string;
    description: string;
}

export interface ContactApiResponse {
    success: boolean;
    data: [];
    message: string;
}

// all key api

interface keyDataType {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface KeyApiResponse {
    success: boolean;
    data: keyDataType[];
    message: string;
}

// genre api

interface genreData {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface GenreApiResponse {
    success: boolean;
    data: genreData[];
}


// license api

interface LicenseData {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface LicenseApiResponse {
    success: boolean;
    data: LicenseData[] | undefined;
    message: string;
}

// type api

interface TypeData {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface TypeApiResponse {
    success: boolean;
    data: TypeData[] | undefined;
}

// error response

// export type ApiError = {
//     status: number;
//     data: {
//         message?: string;
//         [key: string]: any;
//     };
// };


// browse vocal api type


export interface Genre {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface KeyType {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface License {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Type {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface ArtistData {
    id: number;
    name: string;
    singer_writer: string;
    location: string;
    description: string;
    gender: string;
    profile: string;
    is_wishlisted: number;
    is_followed: number;
    created_at: string;
    updated_at: string;
}

interface SongData {
    id: number;
    title: string;
    song_poster: string;
    song: string;
    artist_id: number;
    genre_id: number;
    key_id: number;
    license_id: number;
    type_id: number;
    gender: string;
    bpm: number;
    price: string;
    is_published: number;
    is_wishlisted: number;
    updated_at: string;
    created_at: string;
    artist: ArtistData;
    genre: Genre;
    key: KeyType;
    license: License;
    type: Type;
}

export interface SongPayload {
    success: boolean;
    data: {
        current_page: number;
        data: SongData[];
    }

}


// wishlist api type

interface WishData {
    id: number;
    user_id: number;
    song_id: number;
    is_wishlisted: number;
    created_at: string;
    updated_at: string;
    song: {
        id: number;
        title: string;
        song_poster: string;
        song: string;
        artist_id: number;
        genre_id: number;
        key_id: number;
        license_id: number;
        type_id: number;
        gender: string;
        bpm: number;
        price: string;
        is_published: number;
        is_wishlisted: number;
        created_at: string;
        updated_at: string;
        artist: {
            id: number;
            name: string;
            singer_writer: string;
            location: string;
            description: string;
            profile: string;
            gender: string;
            is_wishlisted: number;
            is_followed: number;
            created_at: string;
            updated_at: string;
        },
        genre: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
        },
        key: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
        },
        license: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
        },
        type: {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
        }
    }
}


export interface WishListDetailsApiResponse {
    success: boolean;
    data: {
        data: {
            current_page: number;
            data: WishData[]
        }
    };
}


// subscriberApi type

// Request payload type
export interface SubscriberApiPayload {
    email: string;
}

// Expected API response type
export interface SubscriberApiResponse {
    success: boolean;
    data: {
        email: string;
        updated_at: string;
        created_at: string;
        id: number;
    };
    message: string;
}


// apply-for-artist


export interface Genre {
    id: number;
    name: string;
}

export interface ApplyForArtistApiPayload {
    name: string;
    email: string;
    social_link: string;
    about: string;
    genres: Genre[];          // array of Genre objects
    other_genre: string;
    file: File;               // uploaded file
}

// export interface ApplyForArtistApiResponse {
//     success: boolean;
//     data: [];              // replace `any` with your actual data type if known
//     message: string;
// }













































