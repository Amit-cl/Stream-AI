import React from 'react' 
import VedioBackground from './VedioBackground' 
import VedioTitle from './VedioTitle' 
import { useSelector } from 'react-redux'


const MainCointainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  if (!movies) return null
  //  console.log(movies[0]);
  const { id,original_title, overview } = movies[0]

  return (
    <div className='overflow-hidden bg-white'>
      <VedioTitle title={original_title} overview={overview} id={id}  />
      <VedioBackground id={id} />
    </div>
  )
}
export default MainCointainer