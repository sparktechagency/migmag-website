import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    ArtistDetailsApiResponse,
    GenreApiResponse,
} from "@/utility/api-type/homeApiType";

const artistApi = createApi({
    reducerPath: 'artistApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    }),
    endpoints: (builder) => ({
        genreData: builder.query<GenreApiResponse,void>({
            query: () => '/genre', // <-- replace with your actual endpoint
        }),
        artistDetails: builder.query<ArtistDetailsApiResponse, { id:string }>({
            query: ({ id }) => ({
                url: `/artist-detail/${id}`,
                method: 'GET',
            }),
        })

    }),
});

export const { useGenreDataQuery, useArtistDetailsQuery } = artistApi;
export default artistApi;
