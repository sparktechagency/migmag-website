import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
    ApplyForArtistApiPayload,
    ApplyForArtistApiResponse,
    ContactApiPayloadType,
    ContactApiResponse, GenreApiResponse, KeyApiResponse, LicenseApiResponse,
    SongDetailsApiResponse, SongPayload, SubscriberApiPayload, SubscriberApiResponse,
    TopArtistListApiResponse,
    TrendingSongsResponse, TypeApiResponse
} from "@/utility/api-type/homeApiType";

const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    }),
    endpoints: (builder) => ({
        topArtistList: builder.query<TopArtistListApiResponse, void>({
            query: () => '/artist', // <-- replace with your actual endpoint
        }),
        trandingVocals: builder.query<TrendingSongsResponse, void>({
            query: () => '/song',
        }),
        songDetails: builder.query<SongDetailsApiResponse, { songId: number }>({
            query: ({songId}) => ({
                url: `/song-details/${songId}`,
                method: 'GET',
            }),
        }),
        contactApi: builder.mutation<ContactApiResponse, ContactApiPayloadType>({
            query: (payload) => ({
                url: "/contact",
                method: "POST",
                body: payload
            })
        }),
        allGenre: builder.query<GenreApiResponse, void>({
            query: () => ({
                url: "/genre",
                method: "GET"
            })
        }),
        allKey: builder.query<KeyApiResponse, void>({
            query: () => ({
                url: "/key",
                method: "GET"
            })
        }),
        allLicense: builder.query<LicenseApiResponse, void>({
            query: () => ({
                url: "/license",
                method: "GET"
            })
        }),
        allType: builder.query<TypeApiResponse, void>({
            query: () => ({
                url: "/type",
                method: "GET"
            })
        }),
        browseCoverVocalApi: builder.query({
            query: ({ filter, globalSearch }) => {
                const params = new URLSearchParams();

                console.log("🟡 Full filter object:", filter);

                if (globalSearch) {
                    console.log("🔍 Search keyword:", globalSearch);
                    params.append("search", globalSearch);
                }

                if (filter?.genre) {
                    params.append("genre_id[0]", filter.genre);
                }
                if (filter?.key) {
                    params.append("key_id[0]", filter.key);
                }
                if (filter?.license) {
                    params.append("license_id[0]", filter.license);
                }
                if (filter?.bpm) {
                    params.append("bpm_value", filter.bpm);
                }
                if (filter?.gender) {
                    params.append("gender[]", filter.gender);
                }
                if (filter?.latest) {
                    params.append("per_page", String(Number(filter.latest)));
                }

                console.log("✅ Final URL params:", params.toString());

                return {
                    url: `/song?${params.toString()}`,
                    method: "GET",
                };
            },
        }),

        subscriberApi: builder.mutation<SubscriberApiResponse, SubscriberApiPayload>({
            query: (payload) => ({
                url: "/subscription",
                method: "POST",
                body: payload,
            }),
        }),

        applyForArtistRequest : builder.mutation({
            query : (formData)=>({
                url : "/apply-for-artist",
                method : "POST",
                body : formData
            })
        })

    }),
});

export const {
    useTopArtistListQuery,
    useSongDetailsQuery,
    useContactApiMutation,
    useAllGenreQuery,
    useAllKeyQuery,
    useAllLicenseQuery,
    useAllTypeQuery,
    useBrowseCoverVocalApiQuery,
    useSubscriberApiMutation,
    useApplyForArtistRequestMutation
} = homeApi;
export default homeApi;
