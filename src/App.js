import React from 'react'
import styled from 'styled-components/macro'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { TextInput } from 'components/TextInput'
import { Button } from 'components/Button'

const Components = styled.div`
  margin: 2rem;

  >* {
    display: block;
    margin-top: 1rem;
  }
`
// Test function
const submitHandler = () => {
  console.log('submit')
}

export const App = () => {
  return (
    <Components>

      <TextInput
        id=""
        label=""
        placeholder="TextInput"
        state=""
        setState="" />

      <Button
        label="Button"
        faIcon={faPlus}
        className=""
        submitHandler={submitHandler} />

    </Components>
  )
}
