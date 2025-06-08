import React from 'react'

function Input({
    type,
    className = '',
    placeholder,
    ...props
}) {
  return (
    <input
    type="text"
    className={`w-full pl-10 pr-4 py-2 rounded-full border
       border-gray-300 shadow-sm focus:outline-none focus:ring-2 
       focus:ring-yellow-400 focus:border-transparent bg-white text-sm transition duration-200 ${className}`}
  />
  )
}

export default Input