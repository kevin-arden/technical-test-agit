import React from 'react'

const Input = ({ type, placeholder, id, onChange, className, title, value, error }) => {
  return (
    <>
      <h3>{title}</h3>
      <input onChange={onChange} className={"w-full drop-shadow-lg mb-1 p-2 rounded-md border-solid border-2 " + className} type={type} placeholder={placeholder} id={id} value={value} />
      {error ? <span className="text-red-500 -mt-2 mb-2">Email format error</span> : <></>}
    </>
  )
}

export { Input }