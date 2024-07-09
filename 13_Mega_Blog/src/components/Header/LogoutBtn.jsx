import React from 'react'
import {useDispatch} from 'react-redux'
import authSlice from '../../store/authSlice'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const disptach = useDispatch()
    const logoutHandler = () =>{
        authSlice.logout().then(() => {
            disptach(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn