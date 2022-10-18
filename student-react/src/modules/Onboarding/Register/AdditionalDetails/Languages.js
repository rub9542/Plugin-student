import React from 'react'

//importing components
import Control from 'components/Control/Control'
import Input from 'components/Input/Input'

//importing icons
import Delete from 'components/icons/Delete'

const Languages = () => {
  return (
    <Control alignCenter gap="15px">
      <Input placeholder="Eg.English" />
      <Delete />
    </Control>
  )
}

export default Languages
