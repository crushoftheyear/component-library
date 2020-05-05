import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Btn = styled.button``

export const Button = ({ label, faIcon, className, submitHandler }) => {
  return (
    <Btn
      type="submit"
      onClick={submitHandler}
      className={className}>

      <FontAwesomeIcon icon={faIcon} />
      {label}

    </Btn>
  )
}