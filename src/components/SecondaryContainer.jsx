import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  // console.log(movies.nowPlayingMovies);
const trending = movies.nowPlayingMovies
  ? [...movies.nowPlayingMovies].reverse()
  : []

  return (
    <div className='bg-black'>
      <div className='bg-transparent backdrop-blur-0 -mt-35 relative z-40'>
     <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />

<MovieList title="Top Rated" movies={movies.topRatedMovie} />
<MovieList title="Popular" movies={movies.popularMovies} />


<MovieList title="Trending" movies={trending} />
<MovieList title="Upcoming" movies={movies.upcomingMovie} />
    </div></div>
  )
}

export default SecondaryContainer
