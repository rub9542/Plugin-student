import React, { useState } from 'react'

//importing components
import Control from 'components/Control/Control'
import Divider from 'components/Divider/Divider'
import SearchInputResponsive from 'components/SearchInputResponsive/SearchInputResponsive'
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'
import Date from 'components/Date/Date'
import Select from 'components/Select/Select'
import Toggle from 'components/Toggle/Toggle'
import Button from 'components/Button'

//importing styled components
import {
  Container,
  Heading,
  SubHeading,
  GreyText,
  HeadingUpload,
  SubHeadingUpload,
  Icon,
  FileMarksheet,
  HeadingMarksheet,
} from 'modules/Onboarding/Register/Education/style'

const Graduation = () => {
  const [uploaded, setUploaded] = useState(false)

  //mock state to store fle
  const [file, setFile] = useState(null)

  //function to store file
  const fileHandler = async event => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
    await setUploaded(true)
  }

  return (
    <>
      <Container column flexStart style={{ marginTop: '35px' }}>
        <Control column flexStart>
          <Heading>UG</Heading>
          <SubHeading>Batch</SubHeading>
        </Control>
        <Divider />
        <Control top="20px" flexStart column>
          <Label>University Name *</Label>
          <Input placeholder="Eg.Bharti.." />
        </Control>
        <Control top="20px" flexStart column>
          <Label>Degree *</Label>
          <SearchInputResponsive placeholder="Enter your address" />
        </Control>
        <Control spaceBetween top="30px" gap="20px">
          <Control flexStart column>
            <Label>Started *</Label>
            <Date format="YYYY/MM" placeholder="YYYY/MM" />
          </Control>
          <Control flexStart column>
            <Label>Ended *</Label>
            <Date format="YYYY/MM" placeholder="YYYY/MM" />
          </Control>
        </Control>
        <Control spaceBetween top="30px" gap="15px">
          <Control flexStart column>
            <Label>Type *</Label>
            <Toggle left="Percentage" right="CGPA" />
          </Control>
          <Control flexStart column>
            <Label>Marks *</Label>
            <Input placeholder="Percentage/CGPA" />
          </Control>
        </Control>
        <Control spaceBetween top="30px" gap="15px">
          <Control flexStart column>
            <Label>State *</Label>
            <Input placeholder="State" />
          </Control>
          <Control flexStart column>
            <Label>Country *</Label>
            <Select placeholder="Country">
              <Option>India</Option>
              <Option>Pakistan</Option>
            </Select>
          </Control>
        </Control>
        <Divider />
        {uploaded ? (
          <Control
            background="#FAFAFB"
            spaceBetween
            centerVertically
            top="20px"
            border="border: 1px solid #E6E7EA"
            borderRadius="10px"
            padding="10px"
          >
            <Icon />
            <Control column gap="4px">
              <HeadingMarksheet>12th Marksheet</HeadingMarksheet>
              <FileMarksheet>
                <span>{file ? file?.name : ''}</span> |{' '}
                <span>
                  {file ? (file?.size / 1024).toFixed(2) + 'MB' : null}
                </span>
              </FileMarksheet>
            </Control>
          </Control>
        ) : (
          <Control column top="20px" spaceBetween flexStart>
            <GreyText>Attachments</GreyText>
            <HeadingUpload>Upload Migration Certificate</HeadingUpload>
            <SubHeadingUpload>
              Upload your proof document as pdf or image file.{' '}
            </SubHeadingUpload>
            <Button.Secondary
              // onClick={() => setUploaded(true)}
              text="Upload"
              style={{ marginTop: '15px' }}
            />
            <input
              type="file"
              onChange={e => fileHandler(e)}
              style={{
                opacity: '0',
                display: 'block',
                width: '80px',
                position: 'relative',
                top: '-40px',
              }}
            />
            <HeadingUpload style={{ marginTop: '10px' }}>
              Upload Latest Marksheet
            </HeadingUpload>
            <SubHeadingUpload>
              Upload your proof document as pdf or image file.{' '}
            </SubHeadingUpload>
            <Button.Secondary text="Upload" style={{ marginTop: '15px' }} />
            <input
              type="file"
              onChange={e => fileHandler(e)}
              style={{
                opacity: '0',
                display: 'block',
                width: '80px',
                position: 'relative',
                top: '-40px',
              }}
            />
          </Control>
        )}
      </Container>
    </>
  )
}

export default Graduation
