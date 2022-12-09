import React from 'react'
import { Button } from '../components/button';
import { logout } from "../hooks/slice"
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between px-2 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <span className="text-white">User Data</span>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  )
}

export { Header }