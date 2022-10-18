import React, { useState } from 'react'

//importing Components
import TextArea from 'components/textarea/TextArea'
import Label from 'components/Label/Label'

//importing styled components
import {
  Container,
  Content,
  Heading,
  Para,
  Anchor,
  RadioLocal,
  RadioLocalGroup,
  LocalSpace,
  FlexWrap,
  SubText,
  LogoSmallText,
  LogoBigText,
  Logo,
  ImageWrap,
} from 'modules/Onboarding/NotInterested/FinalPage/style'

//importing images
import Done from 'components/images/done.png'

const FinalPageNI = () => {
  const [value, setValue] = useState(1)

  return (
    <Container alignCenter column center>
      <Content center alignCenter column>
        <ImageWrap>
          <img src={Done} alt="done" />
        </ImageWrap>
        <Heading>Thank you for letting us know</Heading>
        <Para>
          You will not receive any placement related notification going forward.
        </Para>
        <Anchor
          href="/user/onboarding/checkotp"
        >
          Vist 'PluginLive.com'
        </Anchor>
      </Content>
      <Logo center alignCenter column>
        <LogoSmallText>Powered by</LogoSmallText>
        <LogoBigText>PluginLive</LogoBigText>
      </Logo>
    </Container>
  )
}

export default FinalPageNI
