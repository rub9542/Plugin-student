import React from 'react'

//importing components
import Control from 'components/Control/Control'
import Input from 'components/Input/Input'

//importing icons
import Delete from 'components/icons/Delete'

const Locations = () => {
  return (
    <Control alignCenter gap="15px">
      <Input placeholder="Eg.Bangalore" />
      <Delete />
    </Control>
  )
}

export default Locations
