import React, { useState } from 'react'
import Header from './Header'

const Form = () => {
  const [isSignInForm, setIsSignInForm ] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg"
          alt="body"
        />
      </div>
      <form className=" text-white fixed p-12 w-3/12 bg-black/80 mx-auto left-0 right-0  top-10 ">
        <h1 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
         { !isSignInForm &&<input 
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 bg-gray-700 w-full "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 bg-gray-700 w-full "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 bg-gray-700  w-full"
        />
        <button className="bg-red-500 w-full p-3 my-6">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer text-sm">
          {isSignInForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already a User?Please Sign In'}
        </p>
      </form>
    </div>
  )
}

export default Form
