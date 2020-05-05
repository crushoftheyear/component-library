import React from 'react'
import styled from 'styled-components/macro'

const Input = styled.input``

export const TextInput = ({ id, label, placeholder, state, setState }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input
        type="text"
        id={id}
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder={placeholder}
        required />
    </>
  )
}