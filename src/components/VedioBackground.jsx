import React from 'react'

import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VedioBackground = ({ id }) => {
  const trailerVedio = useSelector((store) => store.movies.trailerVedio)

  useMovieTrailer(id)
  return (
   <div className="absolute top-0 left-0 -z-10 w-screen h-screen overflow-hidden">
  <iframe
    className="w-full h-full scale-125"
    width="560"
    height="315"
   src={
  'https://www.youtube.com/embed/' +
  trailerVedio?.key +
  '?autoplay=1&mute=1&controls=0&loop=1&playlist=' +
  trailerVedio?.key
}

  />
</div>

  )
}

export default VedioBackground
