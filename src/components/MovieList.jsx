import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
 if (!movies?.length) return null

  return (
    <div className="px-6 py-1">
  <div className="inline-block relative">
    {/* title mask */}
    <div className="absolute inset-0 px-5 -py-1
                    bg-black/60 backdrop-blur-md
                    rounded-md" />

    <h1 className="relative text-white text-2xl font-semibold px-5 py-1">
      {title}
    </h1>
  </div>

  <div className="flex gap-3 py-3 overflow-x-scroll no-scrollbar">
    {movies.map(movie => (
      <MovieCard key={movie.id} posterPath={movie.poster_path} />
    ))}
  </div>
</div>


  )
}

export default MovieList
