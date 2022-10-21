// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
// TODO: Create an .env folder to store the api key from here and the one in firebase.js file

const ENDPOINT = 'https://api.themoviedb.org/3/'
const API_KEY = '0df9980ecbd4e5bed0ef64d4c4fb60b7'

// Here are the different endpoints and their respective methods.
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT }),
  endpoints: (builder) => ({
    getMoviesByFilter: builder.query({
      query: (popularFilter) => `${popularFilter}/popular?api_key=${API_KEY}`
    }),
    getMoviesByTrend: builder.query({
      query: (popularTrend) => `trending/all/${popularTrend}?api_key=${API_KEY}`
    }),
    getMoviesBySearchWord: builder.query({
      query: ({ searchWord, page }) =>
        `search/movie?api_key=${API_KEY}&page=${page}&query=${searchWord}`
    }),
    getTvBySearchWord: builder.query({
      query: ({ searchWord, page }) =>
        `search/tv?api_key=${API_KEY}&page=${page}&query=${searchWord}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesByFilterQuery,
  useGetMoviesByTrendQuery,
  useGetMoviesBySearchWordQuery,
  useGetTvBySearchWordQuery
} = moviesApi
