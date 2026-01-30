import { useDispatch } from 'react-redux'
import { options } from '../utils/constant'
import { useEffect } from 'react'
import { addMovieLogo } from '../utils/moviesSlice'

const useMovieLogo = (id) => {
  const dispatch = useDispatch()

  const getMovieLogo = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '/images',
      options
    )
    const json = await data.json()

    const logo =
      json.logos?.length > 0 ? json.logos[0] : null

    dispatch(addMovieLogo(logo))
  }

  useEffect(() => {
    getMovieLogo()
  }, [id])
}

export default useMovieLogo
