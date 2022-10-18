import React from 'react'

//importing components
import Control from 'components/Control/Control'
import Input from 'components/Input/Input'

//importing styled-components
import { LocalLink } from 'modules/Onboarding/Register/AdditionalDetails/style'

const SocialMedia = () => {
  return (
    <Control alignCenter gap="15px">
      <Input placeholder="Eg.Facebook" />
      <Input placeholder="Eg.Facebook.com/profile" />
      <LocalLink />
    </Control>
  )
}

export default SocialMedia
