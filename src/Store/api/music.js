import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const musicApi = createApi ({ 
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://skypro-music-api.skyeng.tech/catalog'}),
    endpoints: (builder) => ({
        getAllTracks: builder.query ({
            query: () => ({url:  '/track/all/'})
        }),
        getFavouriteTracks: builder.query ({
            query: () => ({
                url:  '/track/favorite/all/',
                headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`
                }

            }),
            transformResponse: (response) => {
                return response.map((track) => ({ ...track, isLike: true }));
              },
              providesTags: (result) =>
                result
                  ? [{ type: "isFavorite", id: "LIST" }]
                  : [{ type: "isFavorite", id: "LIST" }],
            }),

        addTrack: builder.mutation ({
         query:  (id) => ({
            url: `/track/${id}/favorite/`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`

            },
            method: 'POST'
        }),
        
        invalidatesTags: [{ type: "isFavorite", id: "LIST" }],
            }),
        deleteTrack: builder.mutation ({
            query:  (id) => ({
               url: `/track/${id}/favorite/`,
               headers: {
                   Authorization: `Bearer ${localStorage.getItem("access")}`

               },
               method: 'DELETE'
            }),
            invalidatesTags: [{ type: "isFavorite", id: "LIST" }],
           })
    })
}) 

export const { useGetAllTracksQuery, useGetFavouriteTracksQuery, useAddTrackMutation, useDeleteTrackMutation } = musicApi
export default musicApi.reducer