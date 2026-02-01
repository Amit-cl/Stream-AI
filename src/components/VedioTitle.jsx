import React from "react"
import { useSelector } from "react-redux"
import useMovieLogo from "../hooks/useMovieLogo"
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid"

const VedioTitle = ({ title, overview, id }) => {
  useMovieLogo(id)

  const logo = useSelector((store) => store.movies.movieLogo)

  return (
    <div className="z-10 absolute top-0 left-0  pt-48 px-12 max-w-xl text-white">
      
      {/* Movie Logo / Title */}
      {logo ? (
        <img
          src={`https://image.tmdb.org/t/p/original${logo.file_path}`}
          className="w-72 mb-4 drop-shadow-[0_6px_25px_rgba(0,0,0,0.9)] "
          alt={title}
        />
      ) : (
        <h1 className="  text-white text-4xl font-extrabold
  bg-black/90 backdrop-blur-md
  px-6 py-3 inline-block
">
          {title}
        </h1>
      )}

      {/* Overview */}
      <p className="mt-3 text-sm text-gray-200 leading-relaxed line-clamp-3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-7 py-2 text-sm font-semibold rounded-md hover:bg-gray-200 transition">
          <PlayIcon className="w-5 h-5" />
          Play
        </button>

        <button className="flex items-center gap-2 bg-gray-600/70 text-white px-7 py-2 text-sm font-semibold rounded-md hover:bg-gray-600 transition">
          <InformationCircleIcon className="w-6 h-6" />
          More Info
        </button>
      </div>
    </div>
  )
}

export default VedioTitle
