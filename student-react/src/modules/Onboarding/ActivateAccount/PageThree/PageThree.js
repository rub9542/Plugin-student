import React from 'react'

//importing styled components
import {
  Container,
  Content,
  Heading,
  Anchor,
  Para,
} from 'modules/Onboarding/ActivateAccount/PageThree/style'

//importing images
import Party from 'components/images/party.png'

const PageThree = () => {
  return (
    <Container alignCenter column center>
      <Content spaceBetween alignCenter column>
        <div>
          <img src={Party} />
        </div>
        <Heading>Verified Successfully.</Heading>
        <Para>Your account verified successfully.</Para>
        <Anchor style={{ width: '100px' }} href="/user/onboarding/setpwd">
          Continue
        </Anchor>
      </Content>
    </Container>
  )
}

export default PageThree
