import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { TextInput } from 'components/TextInput'
import { Button } from 'components/Button'
import { RadioButtons } from 'components/RadioButtons'

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

const testArray = ['Almond', 'brazil nut', 'hazelnut', 'Peanut', 'Pecan', 'Pistachio', 'Walnut']

export const App = () => {
  // Test state
  const [testState, setTestState] = useState('')

  return (
    <Components>

      <TextInput
        id=""
        label=""
        placeholder="Placeholder"
        state={testState}
        setState={setTestState} />

      <Button
        label="Button"
        faIcon={faPlus}
        className=""
        submitHandler={submitHandler} />

      <RadioButtons
        label="Radio buttons"
        id=""
        items={testArray}
        state={testState}
        setState={setTestState} />

    </Components>
  )
}
