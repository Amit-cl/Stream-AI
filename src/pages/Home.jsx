import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainCointainer from '../components/MainCointainer'
import SecondaryContainer from '../components/SecondaryContainer'

const Home = () => {

useNowPlayingMovies()


  return (
    <div>
      <Header />
      <MainCointainer/>
      <SecondaryContainer/>
 
    </div>
  )
}

export default Home
