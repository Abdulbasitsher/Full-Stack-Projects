import React from 'react'
import {  useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <Button className="inline-block px-6 py-2 duration-200 hovar:bg-blue-100 rounded-full">Logout</Button>
  )
}

export default LogoutBtn
