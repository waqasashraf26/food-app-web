import React from 'react'

const Button = ({ label, onClick, style }) => {
  return (
    <button className={`bg-primary text-white px-6 py-2 w-fit rounded-md ${style}`}>
      {label}
    </button>
  )
}

export default Button
