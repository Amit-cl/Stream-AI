import { useDispatch } from 'react-redux'
import { options } from '../utils/constant'
import { useEffect } from 'react'
import { addNowPlayingTrailer } from '../utils/moviesSlice'

const useMovieTrailer = (id) => {
  const dispatch = useDispatch()

  const getMovieVedio = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US',
      // `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`; //it is also correct way
      options,
    )
    const json = await data.json()
    console.log(json)

    const filteredData = json.results.filter((data) => data.type === 'Trailer')
    const trailer = filteredData.length ? filteredData[0] : json.results[0]

    console.log(trailer)
    dispatch(addNowPlayingTrailer(trailer))
  }

  useEffect(() => {
    getMovieVedio()
  }, [id])
}

export default useMovieTrailer
