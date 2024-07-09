import React from 'react'

function Button({
    childern,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className= {`px-4 rounded-lg ${childern} ${textColor} ${className}`} {...props}>
        {childern}
    </button>
  )
}

export default Button