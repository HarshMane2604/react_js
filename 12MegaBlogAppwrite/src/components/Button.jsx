import React from 'react'

function Button({
    children,
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor = "white",
    clasName = '',
    ...props 
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${clasName} ${textColor} ${bgColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button