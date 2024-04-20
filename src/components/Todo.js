import Button from '@atlaskit/button'
import React from 'react'
import style, { styled } from 'styled-components'

const ButtonStyled = styled(Button)`
  margin-top :5px;
  text-align:left;
`;

export default function Todo() {
  return <ButtonStyled shouldFitContainer>Item 1</ButtonStyled>
}
