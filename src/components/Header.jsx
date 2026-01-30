import React, { useEffect } from 'react'
import StreamAiLogo from '../assets/icons/streamAiLogo.svg?react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const dispatch=useDispatch();

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
 const unsubscibe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName,photoURL } = user
      dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }))
      navigate('/Home')
    } else {
      dispatch(removeUser())
      navigate('/')
    }
  })
  // unsubscribed on the component unmount
  return()=> unsubscibe();
}, []);


  return (
    <div
      className="absolute flex justify-between px-8 py-3 w-screen z-20 
      bg-linear-to-b from-black/90 via-black/60 to-transparent"
    >
      <StreamAiLogo />

      {user && (
        <div className=" flex m-4">
          <img
            className="w-12 h-12 m-2"
            src={user.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out){' '}
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
