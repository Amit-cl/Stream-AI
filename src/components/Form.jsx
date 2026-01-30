import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
    setErrorMessage(null)
    // email.current.value = ''
    // password.current.value = ''
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              'https://media.licdn.com/dms/image/v2/D5603AQFxq7DuKgExzw/profile-displayphoto-scale_400_400/B56ZwFrIXZIUAg-/0/1769621719961?e=1771459200&v=beta&t=G4mNw7HDcVVtlUaDQksbATpMAHZ6c6lZ0OJPB0leySM',
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              )
            })
            .catch((error) => {
              setErrorMessage(error.message)
            })

          // setErrorMessage('You are Registered! Sign in Now')
          // setIsSignInForm(true)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + ' ' + errorMessage)
        })
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + ' ' + errorMessage)
        })
    }
  }

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" text-white fixed p-12 w-3/12 bg-black/80 mx-auto left-0 right-0  top-10 "
      >
        <h1 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 bg-gray-700 w-full "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 bg-gray-700 w-full "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 bg-gray-700  w-full"
        />
        {errorMessage && (
          <p className="text-sm md:text-base text-red-600 rounded  shadow">
            {errorMessage}
          </p>
        )}

        <button
          className="bg-red-500 w-full p-3 my-6"
          onClick={handleButtonClick}
        >
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
