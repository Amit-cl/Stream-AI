import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { options } from "../utils/constant"
import { addUpcomingMovies } from "../utils/moviesSlice"

const useUpcomingMovies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      )
      const json = await data.json()
      dispatch(addUpcomingMovies(json.results))
    }
    getUpcomingMovies()
  }, [])
}

export default useUpcomingMovies
