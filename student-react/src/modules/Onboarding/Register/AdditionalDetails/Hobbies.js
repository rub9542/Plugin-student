import React from 'react'

//importing components
import Control from 'components/Control/Control'
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'

//importing icons
import Delete from 'components/icons/Delete'

const Hobbies = () => {
  return (
    <Control alignCenter gap="15px">
      <Input placeholder="Eg.Skiing" />
      <Delete />
    </Control>
  )
}

export default Hobbies
