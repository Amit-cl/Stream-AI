import React, { useEffect } from 'react'
import StreamAiLogo from '../assets/icons/streamAiLogo.svg?react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constant'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleToggle = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChanges = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/Error')
      })
  }

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        )
        navigate('/Home')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
    // unsubscribed on the component unmount
    return () => unsubscibe()
  }, [])

  return (
    <div
      className="absolute flex justify-between px-8 py-1 w-screen z-1
      bg-linear-to-b from-black/90 via-black/60 to-transparent"
    >
      <StreamAiLogo />

      {user && (
        <div className=" flex m-4">
          {showGptSearch && (
            <select
              onChange={handleLanguageChanges}
              className="px-3 py-2 m-2 rounded-lg bg-black/60 text-white border border-white/30 outline-none"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleToggle}
            className="py-2 px-3 m-2 bg-white/80 rounded-lg hover:bg-white/50"
          >
            {showGptSearch ? 'Homepage' : 'GPT Search'}
          </button>

          <img className="w-12 h-12 m-2" src={user.photoURL} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer  0"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
