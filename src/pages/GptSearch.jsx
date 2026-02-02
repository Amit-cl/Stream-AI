import React from 'react'
import GptMovieSuggestions from '../components/GptMovieSuggestions'
import GptSearchBar from '../components/GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <GptMovieSuggestions/>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch