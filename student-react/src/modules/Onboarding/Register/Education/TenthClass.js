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
  FileInput,
} from 'modules/Onboarding/Register/Education/style'

//importing icons
import Delete from 'components/icons/Delete'
import Dropdown from 'components/icons/Dropdown'

const TenthClass = ({ education, setEducation }) => {
  const [uploaded, setUploaded] = useState(false)
  const [show, setShow] = useState(true)

  //mock state to store fle
  const [file, setFile] = useState(null)

  //function to store file
  const fileHandler = event => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
    setUploaded(true)
  }

  //function to alter display of fields
  const showHandler = () => {
    show ? setShow(false) : setShow(true)
  }

  //handling all the onchange events for form submission
  const formHandler = (e, name) => {
    education.map(obj => {
      var res = Object.keys(obj).filter(obj_new => {
        // if (obj[obj_new].name === name) {
        //   return obj[obj_new]
        // }
        obj[obj_new].name === name
      })

      console.log(res)

      // var obj_new = {}

      // if (res.validation(e)) {
      //   res.value = e.target.value.length ? e.target.value : ''
      //   res.messageShow = false
      //   obj_new = { ...Object.keys(obj).filter(ele => obj[name] !== name), res }
      // } else {
      //   res.messageShow = true
      //   obj_new = { ...Object.keys(obj).filter(ele => obj[name] !== name), res }
      // }

      // obj = obj_new
    })

    // var res = personalData.filter(obj => obj.name === name)[0]
    // var new_arr = []

    // if (res.validation(e)) {
    //   res.value = e.target.value.length ? e.target.value : ''
    //   res.messageShow = false
    //   new_arr = [...personalData.filter(ele => ele.name !== name), res]
    // } else {
    //   res.messageShow = true
    //   new_arr = [...personalData.filter(ele => ele.name !== name), res]
    // }
    // setPersonalData(new_arr)
  }

  React.useEffect(() => {
    console.log(education)
  }, [education])

  return (
    <Container column flexStart>
      <Control spaceBetween>
        <Control column flexStart>
          <Heading>10th Class</Heading>
          <SubHeading>Batch</SubHeading>
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
            <Label>School Name *</Label>
            <Input
              placeholder="Eg.Bharti.."
              onChange={e => formHandler(e, 'institutionName')}
            />
          </Control>

          <Control top="20px" flexStart column>
            <Label>Board *</Label>
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
              <HeadingUpload>Upload 10th Marksheet</HeadingUpload>
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

export default TenthClass
