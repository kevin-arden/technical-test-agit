import React from 'react'

const Button = ({ type, onClick, children, className }) => {
  return (
    <button className={"bg-white border-solid border-2 my-2 py-1 px-2 rounded-md " + className} type={type} onClick={onClick}>{children}</button>
  )
}

export { Button }