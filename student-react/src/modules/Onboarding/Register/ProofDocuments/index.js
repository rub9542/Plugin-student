import React from 'react'

import Register from 'modules/Onboarding/Register'

//importing components
import Control from 'components/Control/Control'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import { useNavigate } from 'react-router-dom'

import {
  Ul,
  Heading,
  SelectLocal,
} from 'modules/onboarding/Register/ProofDocuments/style'

//importing icons
import Upload from 'components/icons/Upload'

const ProofDocuments = () => {
  const { Option } = SelectLocal
  const navigate = new useNavigate()

  return (
    <Register heading="Proof/Documents">
      <Control>
        <Ul>
          <li>Max size: 10 MB</li>
          <li>Supported format : pdf, png, jpg, jpeg</li>
          <li>Supported name format : filetype_name_year</li>
        </Ul>
      </Control>
      <Control column gap="15px">
        <Heading>
          ID Proof <span>(documents allowed)</span>
        </Heading>
        <Control
          spaceAround
          alinCenter
          padding="10px 20px"
          border="1px solid #CCCFD6"
          borderRadius="10px"
        >
          <SelectLocal placeholder="Aadhar Card" width="fit-content">
            <Option>Aadhar Card</Option>
            <Option>Driving Liscence</Option>
            <Option>Pan Card</Option>
          </SelectLocal>
          <Control flexStart end>
            <Checkbox padding="4px 15px">pdf format</Checkbox>
            <Control column width="fit-content" gap="10px">
              <Button.Secondary icon={<Upload />} text="Upload Front" />
              <Button.Secondary icon={<Upload />} text="Upload Back" />
            </Control>
          </Control>
        </Control>
      </Control>
      <Control column gap="15px" top="25px">
        <Heading>
          Address Proof <span>(documents allowed)</span>
        </Heading>
        <Control
          spaceAround
          alinCenter
          padding="10px 20px"
          border="1px solid #CCCFD6"
          borderRadius="10px"
        >
          <SelectLocal placeholder="Aadhar Card" width="fit-content">
            <Option>Aadhar Card</Option>
            <Option>Driving Liscence</Option>
            <Option>Pan Card</Option>
          </SelectLocal>
          <Control flexStart end>
            <Checkbox style={{ padding: '4px 15px' }}>pdf format</Checkbox>
            <Control column width="fit-content" gap="10px">
              <Button.Secondary icon={<Upload />} text="Upload Front" />
              <Button.Secondary icon={<Upload />} text="Upload Back" />
            </Control>
          </Control>
        </Control>
      </Control>
      <Control width="100%" flexEnd gap="15px" top="35px">
        <Button.Secondary text="Back" />
        <Button.Primary onClick={() => navigate('/user/onboarding/register/additional-details')} text="Save & Continue" />
      </Control>
    </Register>
  )
}

export default ProofDocuments
