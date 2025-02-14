import React from 'react'

function Button({
    childern,
    type = 'button',
    bgcolor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
    <button
    className={`px-4 py-2 rounded-3xl ${bgcolor} ${textColor} ${className}`}
    type = {type}
    {...props}
    >
    {childern}
    </button>
    )
}

export default Button