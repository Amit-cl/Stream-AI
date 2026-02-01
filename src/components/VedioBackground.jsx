import React from 'react'

import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VedioBackground = ({ id }) => {
  const trailerVedio = useSelector((store) => store.movies.trailerVedio)

  useMovieTrailer(id)
  return (
 <div className=" w-screen h-screen overflow-hidden">
  <iframe
    className=" scale-130 w-screen h-screen object-cover"
    src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVedio?.key}`}
    title="YouTube video player"
    allow="autoplay; encrypted-media"
  ></iframe>
</div>




  )
}

export default VedioBackground
