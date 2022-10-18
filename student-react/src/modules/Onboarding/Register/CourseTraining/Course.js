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
import Editor from 'components/Editor/Editor'

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
  FileInput,
} from 'modules/Onboarding/Register/CourseTraining/style'

//importing icons
import Delete from 'components/icons/Delete'
import Dropdown from 'components/icons/Dropdown'

const Course = () => {
  const [uploaded, setUploaded] = useState(false)
  const [show, setShow] = useState(true)

  //mock state to store fle
  const [file, setFile] = useState(null)

  //function to store file
  const fileHandler = async event => {
    setFile(event.target.files[0])
    await setUploaded(true)
  }

  //function to alter display of fields
  const showHandler = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <Container column flexStart>
      <Control spaceBetween>
        <Control column flexStart>
          <Heading>Course Name from Institute Name</Heading>
          <SubHeading>timeline</SubHeading>
        </Control>
        <Control gap="10px" flexEnd>
          <Delete />
          <div onClick={() => showHandler()}>
            <Dropdown />
          </div>
        </Control>
      </Control>
      {show ? (
        <>
          <Divider />
          <Control top="20px" flexStart column>
            <Label>Institute Name *</Label>
            <Input placeholder="Eg.Bharati..." />
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
          <Control top="20px" flexStart column>
            <Label>Course Name *</Label>
            <Input placeholder="Eg.Bharati.." />
          </Control>
          <Control top="20px" flexStart column>
            <Label>Description *</Label>
            <Editor />
          </Control>
          <Control top="20px" flexStart column>
            <Label>Skills utilized/gained *</Label>
            <SearchInputResponsive placeholder="Eg React JS" />
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
                <HeadingMarksheet>10th Marksheet</HeadingMarksheet>
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
              <HeadingUpload>Upload Certificate</HeadingUpload>
              <SubHeadingUpload>
                Upload your proof document as pdf or image file.{' '}
              </SubHeadingUpload>
              <Button.Secondary text="Upload" style={{ marginTop: '15px' }} />
              <FileInput type="file" onChange={e => fileHandler(e)} />
            </Control>
          )}
        </>
      ) : null}
    </Container>
  )
}

export default Course
