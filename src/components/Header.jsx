import React from 'react'
import StreamAiLogo from '../assets/icons/streamAiLogo.svg?react'

const Header = () => {
  return (
    <div  className="absolute px-8 py-3 w-full z-20 
      bg-linear-to-b from-black/90 via-black/60 to-transparent"
    >
      <StreamAiLogo />
    </div>
  )
}

export default Header
