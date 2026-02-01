import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies copy'
import MainCointainer from '../components/MainCointainer'
import SecondaryContainer from '../components/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'


const Home = () => {

useNowPlayingMovies()
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()

  return (
    <div>
      <Header />
      <GptSearch/>
      <MainCointainer/>
      <SecondaryContainer/>
 
    </div>
  )
}

export default Home
