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
                Authorization: ''
                }

            })
        }),
        addTrack: builder.mutation ({
         query:  (id) => ({
            url: `/track/${id}/favorite/`,
            headers: {
                Authorization: '//токен'

            },
            method: 'POST'

        })
        }),
        deleteTrack: builder.mutation ({
            query:  (id) => ({
               url: `/track/${id}/favorite/`,
               headers: {
                   Authorization: '//токен'

               },
               method: 'DELETE'

           })
           })


    })

}) 

export const { useGetAllTracksQuery, useGetFavouriteTracksQuery, useAddTrackMutation, useDeleteTrackMutation } = musicApi
export default musicApi.reducer