import React from 'react'
import GptMovieSuggestions from '../components/GptMovieSuggestions'
import GptSearchBar from '../components/GptSearchBar'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className="relative z-0">
      <div className="fixed inset-0 -z-10">
        <img src={BG_URL} className="w-full h-full object-cover" />
      </div>

    
      <div className="relative bg-black/60 min-h-screen">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearch
