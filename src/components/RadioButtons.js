import React from 'react'
import styled from 'styled-components/macro'

const Input = styled.input``

export const RadioButtons = ({ label, items, state, setState }) => {
  return (
    <>
      <p>{label}</p>

      {/* Render radio buttons from items(array) */}
      {items.map((item) => (

        <div key={item} className="radio-btn">
          <Input
            type="radio"
            id={item}
            value={item}
            onChange={(event) => setState(event.target.value)}
            checked={state === item}
            required
            name="radioBtn" />
          <label htmlFor={item} className="radio-label">{item.charAt(0).toUpperCase() + item.slice(1)}</label>
        </div>

      ))}

    </>
  )
}