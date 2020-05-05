import React from 'react'

export const Button = ({ label, className, submitHandler }) => {
  return (
    <button
      type="submit"
      onClick={() => submitHandler}
      className={className}>
      {label}
    </button>
  )
}