//this is the index file for content section of role creation

import React from 'react'

import LocalTitle from 'components/Typography/Typography'

//importing styled components
import {
  Container,
  Left,
  Right,
  SubContainer,
  Heading,
  Content,
} from 'modules/Onboarding/Register/style'
import ProgressBar from 'modules/Onboarding/Register/ProgressBar/ProgressBar'

const Register = ({ heading, children }) => {
  return (
    <>
      <Container>
        <SubContainer>
          <Left>
            <ProgressBar />
          </Left>
          <Right>
            <Heading>{heading}</Heading>
            <Content>{children}</Content>
          </Right>
        </SubContainer>
      </Container>
    </>
  )
}

export default Register
