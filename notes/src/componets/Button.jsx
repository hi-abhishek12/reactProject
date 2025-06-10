import React from 'react'

function Button({
  children,
  type = "button",
  className = '',
  ...props
}) {
  return (
   <button 
    className={`${className}`}
    type={type}
    {...props}>
      {children}
   </button>
  )
}

export default Button