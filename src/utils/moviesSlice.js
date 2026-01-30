import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
    movieLogo: null, // ✅ added
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addNowPlayingTrailer: (state, action) => {
      state.trailerVedio = action.payload
    },
    addMovieLogo: (state, action) => {
      state.movieLogo = action.payload
    },
  },
})

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addMovieLogo, 
} = moviesSlice.actions

export default moviesSlice.reducer
