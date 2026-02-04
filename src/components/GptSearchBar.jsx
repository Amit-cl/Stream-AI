import React, { useRef } from 'react'
import openai from '../utils/OpenAI'
import client from '../utils/OpenAI'
import { options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addGptMovieResult } from '../utils/gptSlice'

import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()

  const langKey= useSelector((store)=>store.config.lang)

  const searchMovieTmdb = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
      options,
    )
    const json = await res.json()
    return json.results
  }

  const handleGptSearchClick = async () => {
    if (!searchText.current?.value) return

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : " +
      "${searchText.current.value}".
    If Indian → All Indian 
    If Foreign → All Foreign 
    if not defined,mix 2-3 ind and 2-3 foreign Same genre.
     Output only names, comma separated ,mixed.`

    const response = await client.responses.create({
      model: 'openai/gpt-oss-20b',
      input: gptQuery,
    })
    // console.log(response.output_text)
    // if (!gptMovie) {
    //   //error handing
    // }
    // const gptMovie = response.output_text?.split(',')||[]
    const gptMovie = response.output_text?.split(',') || []
    // dispatch(addGptMovieResult({movie:gptMovie})
    const promiseArray = gptMovie.map((movie) => {
      return searchMovieTmdb(movie)
    })
    const tmbdResults = await Promise.all(promiseArray)
    dispatch(
      addGptMovieResult({ movieNames: gptMovie, movieResults: tmbdResults }),
    )
  }

  return (
    <div
      className="pt-32 md:pt-24
 flex justify-center relative z-20"
    >
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 text-black bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="button"
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
         
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
