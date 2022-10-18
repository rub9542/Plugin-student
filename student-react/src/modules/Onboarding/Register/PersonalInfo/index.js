import React, { useState, useEffect } from 'react'
import { Form,
  StyledDivider,
  FormHeading,
  FormItem,
  FlexWrap,
  RadioGroup, } from 'components/UIComponents/FormStyles'
  import AntdSteps from 'components/AntdSteps'
  import {
    Container,
    LeftDiv,
    RightDiv,
    StickyDiv,
  } from './style'
  
import Register from 'modules/Onboarding/Register'
// import Input from 'components/Input/input'
//importing components
import Control from 'components/Control/Control'
import Label from 'components/Label/Label'
import Input from 'components/Form/input'
import Date from 'components/Date/Date'
import Select from 'components/SelectLocal/index'
import SelectInput from 'components/SelectInput/SelectInput'
import Checkbox from 'components/Checkbox/Checkbox'
import Divider from 'components/Divider/Divider'
import Button from 'components/Button'
import { DateConvert } from 'components/Date/DateConvert'
import {
  Heading,
  ImageUploadWrapper,
  UploadText,
  FileInput,
} from 'modules/Onboarding/Register/PersonalInfo/style'
import { ValidateMessage } from 'modules/Onboarding/Register/style'
import { data } from 'modules/Onboarding/Register/PersonalInfo/data'
import Camera from 'components/icons/Camera'
import Add from 'components/icons/Add'
import { useDispatch, useSelector } from 'react-redux'
import { actionInfo } from './actions'
import { useNavigate } from 'react-router-dom'
import { getStudentData } from '../../actions'

const PersonalInfo = () => {
  // let stdData={}
  useEffect(()=>{
    // let newId=params.studentId
    let newId='fa1665e9-d219-45ad-bac3-c30e7bb81996'  
    dispatch(getStudentData(newId))
    // console.log('in intial', studentData, stdData)
    
  },[])
  // useEffect(()=>{
  //   // console.log('in effect', Object.keys(studentData.admin).length, stdData)
  //   // formHandler(studentData.admin.last_name, 'lastName')
  //   formHandler(studentData.admin.first_name ? studentData.admin.first_name : '', 'firstName')
  //   formHandler(studentData.student.uniRollNo ? studentData.student.uniRollNo : '', 'uniRollNo')
  //   formHandler(studentData.studentPersonalProfile.dob ? studentData.studentPersonalProfile.dob : '', 'dob')
  //   formHandler(studentData.student.uniRollNo ? studentData.student.uniRollNo : '', 'uniRollNo')
  //   formHandler(studentData.studentPersonalProfile.gender ? studentData.studentPersonalProfile.gender  :'', 'gender')
  //   formHandler(studentData.admin.email ? studentData.admin.email : '', 'email')
  //   formHandler(studentData.studentPersonalProfile.secondaryEmail ? studentData.studentPersonalProfile.secondaryEmail : '','secondaryEmail')
  //   formHandler(studentData.studentPersonalProfile.phoneNumber ? studentData.studentPersonalProfile.phoneNumber : '', 'contactNumber')
  //   formHandler(studentData.studentPersonalProfile.permAddrLine1 ? studentData.studentPersonalProfile.permAddrLine1 : '', 'permAddrLine1')
  //   formHandler(studentData.studentPersonalProfile.permAddrLine2 ? studentData.studentPersonalProfile.permAddrLine2 : '', 'permAddrLine2')
  //   formHandler('india', 'country')
  //   formHandler(studentData.studentPersonalProfile.permPostCode ? studentData.studentPersonalProfile.permPostCode :'', 'permPostCode')
  //   formHandler(studentData.studentPersonalProfile.permCity ? studentData.studentPersonalProfile.permCity :'', 'permCity')
  //   formHandler(studentData.studentPersonalProfile.corrCity ? studentData.studentPersonalProfile.corrCity : '', 'corrCity')
  //   formHandler(studentData.studentPersonalProfile.permState ? studentData.studentPersonalProfile.permState: '', 'permState')
  //   formHandler(studentData.studentPersonalProfile.corrAddrLine1 ? studentData.studentPersonalProfile.corrAddrLine1:"", 'corrAddrLine1')
  //   formHandler(studentData.studentPersonalProfile.corrAddrLine2  ?studentData.studentPersonalProfile.corrAddrLine2 :'', 'corrAddrLine2')

  // },[studentData])
  // const [stdData, setStdData] = useState({})

  const dispatch = new useDispatch()
  const navigate = new useNavigate()
  const studentData= useSelector(state => state.studentData)
  // setStdData(studentData)
  // stdData=useSelector(state => state.studentData)
  const { Option } = Select

  const select_input_arr = ['+91']

  const [personalData, setPersonalData] = useState(data)
  const [uploaded, setUploaded] = useState(false)
  //mock state to store fle
  const [file, setFile] = useState(null)

  const formHandler = (e, name) => {
    console.log('e', e, name)
    if(name === 'dob'){
      e=getDate(e)
    }
    var res = personalData.filter(obj => obj.name === name)[0]
    var new_arr = []

    if (res.validation(e)) {
      res.value = e.length ? e : ''
      res.messageShow = false
      new_arr = [...personalData.filter(ele => ele.name !== name), res]
    } else {
      res.messageShow = true
      new_arr = [...personalData.filter(ele => ele.name !== name), res]
    }
    setPersonalData(new_arr)
  }
  const {roleForm} = Form.useForm()

  //function to store file
  const fileHandler = event => {
    setFile(event.target.files[0])
    setUploaded(true)
  }
const getDate=(str)=>{

  let newdate= str;
  str=str.split('-').reverse().join('-')
  // let mnth = ("0" + (newdate.getMonth() + 1)).slice(-2);
  // let  day = ("0" + newdate.getDate()).slice(-2);
  // newdate=[day,mnth,newdate.getFullYear()].join("-")
  console.log('newdate',newdate,str)
  return str;
}
  const submitHandler = () => {
    personalData.filter(obj => {
      // console.log('obj', obj)
      if (!obj.value) {
        obj.messageShow = true
        setPersonalData(ele => {
          return [...personalData.filter(ele => ele.name !== obj.name), obj]
        })
      }
    })
    if (
      !personalData.some(obj => {
        console.log('obj.value',personalData,obj, obj.value)
        return  obj.value
      })
    ) {
      console.log('personalData.some is fine')

      // dispatch(actionInfo(personalData))
      // navigate('/user/onboarding/register/education')
    }else{
      console.log('personalData.some is failing')
    }
  }

  const validateMessage = name => {
    return personalData.filter(obj => obj.name === name)[0]
  }
  console.log('student',Object.keys(studentData.admin).length )
  return (
    <Register heading="Personal Details">
      <Form.Provider>
        <Form
        scrollToFirstError
        onFinish={(e)=> console.log('e', e)}
        id={'perosnalInfoForm'}
        form={roleForm}
        layout="vertical"
        >
          <Container>
          <FormItem
          name={'first name'}
          // initialValue={'first-------name'}
          rules={[
          { required: true, message: 'please provide your first name ' },
          ]}
          >
            <Input
            label='First Name'
            name="first_name"
            type="text"
            width={'178px'}
            placeholder="First name"
            onChange={e => formHandler(e.target.value, 'firstName')}
             />
          </FormItem>
          <FormItem
          name={'last name'}
          // initialValue={'first-------name'}
          rules={[
          { required: true, message: 'please provide your last name ' },
          ]}
          >
            <Input
            name="last_name"
            label='last Name'
            type="text"
            width={'178px'}
            placeholder="last name"
            onChange={e => formHandler(e.target.value, 'firstName')}
             />
          </FormItem>
          </Container>
          <Container gap="15px" flexStart>
      <FormItem
          name={'registration number'}
          rules={[
          { required: true, message: 'please provide your reg num ' },
          ]}
          >
        <Input
        width='370px'

            name="Registration_number"
        label='Registration number'
        // value={studentData.admin.first_name}
          placeholder="Registration number"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart>
      <FormItem
          name={'dob'}
          rules={[
          { required: true, message: 'please provide your reg num ' },
          ]}
          >
        <Input
            name="dob"
        label='Date of Birth'
        type='date'
        width='370px'
        // value={studentData.admin.first_name}
          placeholder="dob"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart>
      <FormItem
          name={'gender'}
          rules={[
          { required: true, message: 'please provide your reg num ' },
          ]}
          >
        <Select
          showSearch={true}
          arr={[]}
          width={'370px'}
          OptionData={['Male', 'Female']}
          label="Sex *"
          valueParam="value"
          placeholder="Select Gender"
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart column>
      <Heading>Contact Details</Heading>
      <FormItem
          name={'primaryemail'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <Input
            name="primaryemail"
        label='Primary Email Address'
        type='email'
        // width='370px'
        // value={studentData.admin.first_name}
          placeholder="email"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart column>
      <FormItem
          name={'secondaryemail'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <Input
            name="secondaryemail"
        label='Secondary Email Address'
        type='email'
        // width='370px'
        // value={studentData.admin.first_name}
          placeholder="email"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container>
      <Container gap="15px" flexStart column>
      {/* <FormItem
          name={'phone'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <Input
            name="phone"
        label='Phone'
        // type='text'
        // width='370px'
        // value={studentData.admin.first_name}
          placeholder="phone"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem> */}
      <FormItem
          name={'phone'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <SelectInput
            name="phone"
        label='Phone'
        arr={['ind']}
        // type='text'
        selectWidth='83px'
        InputWidth='438px'

        // value={studentData.admin.first_name}
          placeholder="phone"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart column>
      <Heading>Permanent Address</Heading>

      <FormItem
          name={'Address_1'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <Input
            name="Address_1"
        label='Address 1'
        type='text'
        // width='370px'
        // value={studentData.admin.first_name}
          placeholder="Address 1"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart column>
      <FormItem
          name={'Address_2'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <Input
            name="Address_2"
        label='Address 2'
        type='text'
        // width='370px'
        // value={studentData.admin.first_name}
          placeholder="Address 2"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
      <Container gap="15px" flexStart >
      <FormItem
          name={'country'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
        <Select
          showSearch={true}
          arr={[]}
          width={'255px'}
          OptionData={['']}
          label="Country *"
          valueParam="value"
          placeholder="Select Country"
        />
       
      </FormItem>
      <FormItem
          name={'pincode'}
          rules={[
          { required: true, message: 'please provide your Email ID ' },
          ]}
          >
         <Input
            name="pincode"
        label='Pin code'
        type='text'
        // width='370px'
        // value={studentData.admin.first_name}
          placeholder="pincode"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> 
        </Form>
      </Form.Provider>
     
    {/* <Container gap="15px" flexStart>
      <FormItem
          name={'first name'}
          rules={[
          { required: true, message: 'please provide your first name ' },
          ]}
          >
        <Input
            name="Registration_number"
        label='Registration number'
        value={studentData.admin.first_name}
          placeholder="Registration number"
          onChange={e => formHandler(e.target.value, 'firstName')}
        />
       
      </FormItem>
      </Container> */}
      {/* <Container column flexStart>
        <Label>Last Name *</Label>
        <Input
            name="first_name"

          value={studentData.admin.last_name}
          placeholder="Last name"
          onChange={e => formHandler(e.target.value, 'lastName')}
        />
        <ValidateMessage>
          {validateMessage('lastName').messageShow
            ? validateMessage('lastName').message
            : ''}
        </ValidateMessage>
      </Control> */}
      {/* <Control column alignCenter>
        <ImageUploadWrapper column alignCenter center>
          <Camera />
          <Control column alignCenter>
            <div>Max file size: 2MB</div>
            <div>Dimension: 130*130</div>
            <div>File format: .png, .jpeg</div>
          </Control>
        </ImageUploadWrapper>
        <Control center alignCenter top="5px">
          <Add />
          <UploadText>Upload Photo</UploadText>
        </Control>
        <FileInput type="file" onChange={e => fileHandler(e)} />
        {uploaded ? (
          <Control
            width="100%"
            flexEnd
            gap="10px"
            top="5px"
            column
            alignCenter
          >
            <Button.Secondary text="Remove" />
            <Button.Primary text="Change" />
          </Control>
        ) : null}

        <ValidateMessage>
          {validateMessage('lastName').messageShow
            ? validateMessage('lastName').message
            : ''}
        </ValidateMessage>
      </Control> */}
    {/* </Control> */}
    {/* <Control flexStart width="70%" top="35px" column>
      <Label>Registration No *</Label>
      <Input
        value={studentData.student.uniRollNo}
        placeholder="Enter your registration no"
        onChange={e => formHandler(e.target.value, 'uniRollNo')}
      />
      <ValidateMessage>
        {validateMessage('uniRollNo').messageShow
          ? validateMessage('uniRollNo').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control flexStart width="70%" top="35px" column>
      <Label>Date of birth *</Label>
      <Input
        type='date'
        value='18-11-1998'
        placeholder="DD/MM/YYYY"
        onChange={e => formHandler(DateConvert(e._d), 'dob')}
      />
      <ValidateMessage>
        {validateMessage('dob').messageShow
          ? validateMessage('dob').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control flexStart width="70%" top="35px" column>
      <Label>Sex *</Label>
      <SelectLocal value={studentData.admin.gender} placeholder="Select" onChange={e => formHandler(e, 'gender')}>
        <Option value='Male'>Male</Option>
        <Option value='Female'>Female</Option>
      </SelectLocal>
      <ValidateMessage>
        {validateMessage('gender').messageShow
          ? validateMessage('gender').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control top="35px">
      <Heading>Contact Details</Heading>
    </Control>
    <Control flexStart top="15px" column>
      <Label>Primary Email Address *</Label>
      <Input
        placeholder="eg:harry@yahoo.com"
        onChange={e => formHandler(e.target.value, 'email')}
      />
      <ValidateMessage>
        {validateMessage('email').messageShow
          ? validateMessage('email').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control flexStart top="15px" column>
      <Label>Secondary Email Address *</Label>
      <Input
        placeholder="eg:harry@yahoo.com"
        onChange={e => formHandler(e.target.value, 'secondaryEmail')}
      />
      <ValidateMessage>
        {validateMessage('secondaryEmail').messageShow
          ? validateMessage('secondaryEmail').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control flexStart top="15px" column>
      <Label>Phone No *</Label>
      <SelectInput
        selectWidth="10%"
        InputWidth="60%"
        arr={select_input_arr}
        formHandler={(e)=>formHandler (e.target.value, 'contactNumber')}
        name="contactNumber"
      />
      <ValidateMessage>
        {validateMessage('contactNumber').messageShow
          ? validateMessage('contactNumber').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control top="35px">
      <Heading>Permanent Address</Heading>
    </Control>
    <Control top="15px" flexStart column>
      <Label>Address 1 *</Label>
      <Input
        placeholder="Enter your address"
        onChange={e => formHandler(e.target.value, 'permAddrLine1')}
      />
      <ValidateMessage>
        {validateMessage('permAddrLine1').messageShow
          ? validateMessage('permAddrLine1').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control top="15px" flexStart column>
      <Label>Address 2 *</Label>
      <Input
        placeholder="Enter your address"
        onChange={e => formHandler(e.target.value, 'permAddrLine2')}
      />
      <ValidateMessage>
        {validateMessage('permAddrLine2').messageShow
          ? validateMessage('permAddrLine2').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control top="15px" flexStart gap="15px">
      <Control flexStart column>
        <Label>Country *</Label>
        <SelectLocal
          placeholder="Select"
          onChange={e => formHandler(e, 'country')}
        >
          <Option value='India'>India</Option>
          <Option value='Argentina'>Argentina</Option>
        </SelectLocal>
        <ValidateMessage>
          {validateMessage('country').messageShow
            ? validateMessage('country').message
            : ''}
        </ValidateMessage>
      </Control>
      <Control flexStart column>
        <Label>Pincode *</Label>
        <Input
          placeholder="121212"
          onChange={e => formHandler(e.target.value, 'permPostCode')}
        />
        <ValidateMessage>
          {validateMessage('permPostCode').messageShow
            ? validateMessage('permPostCode').message
            : ''}
        </ValidateMessage>
      </Control>
    </Control>
    <Control top="15px" flexStart gap="15px">
      <Control flexStart column>
        <Label>City</Label>
        <SelectLocal
          placeholder="Select"
          onChange={e => formHandler(e, 'permCity')}
        >
          <Option value='Delhi'>Delhi</Option>
          <Option value='Mumbai'>Mumbai</Option>
        </SelectLocal>
        <ValidateMessage>
          {validateMessage('permCity').messageShow
            ? validateMessage('permCity').message
            : ''}
        </ValidateMessage>
      </Control>
      <Control flexStart column>
        <Label>State *</Label>
        <SelectLocal
          placeholder="Select"
          onChange={e => formHandler(e, 'permState')}
        >
          <Option value='Karnataka'>Karnataka</Option>
          <Option value='Haryana'>Haryana</Option>
        </SelectLocal>
        <ValidateMessage>
          {validateMessage('permState').messageShow
            ? validateMessage('permState').message
            : ''}
        </ValidateMessage>
      </Control>
    </Control>
    <Control top="35px" spaceBetween>
      <Heading>Temporary Address</Heading>
      <Checkbox>Same as permanent address</Checkbox>
    </Control>
    <Control top="15px" flexStart column>
      <Label>Address 1 *</Label>
      <Input
        placeholder="Enter your address"
        onChange={e => formHandler(e.target.value, 'corrAddrLine1')}
      />
      <ValidateMessage>
        {validateMessage('corrAddrLine1').messageShow
          ? validateMessage('corrAddrLine1').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control top="15px" flexStart column>
      <Label>Address 2 *</Label>
      <Input
        placeholder="Enter your address"
        onChange={e => formHandler(e.target.value, 'corrAddrLine2')}
      />
      <ValidateMessage>
        {validateMessage('corrAddrLine2').messageShow
          ? validateMessage('corrAddrLine2').message
          : ''}
      </ValidateMessage>
    </Control>
    <Control top="15px" flexStart gap="15px">
      <Control flexStart column>
        <Label>Country *</Label>
        <SelectLocal
          placeholder="Select"
          onChange={e => formHandler(e, 'country')}
        >
          <Option value='India'>India</Option>
          <Option value='Argentina'>Argentina</Option>
        </SelectLocal>
        <ValidateMessage>
          {validateMessage('country').messageShow
            ? validateMessage('country').message
            : ''}
        </ValidateMessage>
      </Control>
      <Control flexStart column>
        <Label>Pincode *</Label>
        <Input
          placeholder="121212"
          onChange={e => formHandler(e.target.value, 'corrPostCode')}
        />
        <ValidateMessage>
          {validateMessage('corrPostCode').messageShow
            ? validateMessage('corrPostCode').message
            : ''}
        </ValidateMessage>
      </Control>
    </Control>
    <Control top="15px" flexStart gap="15px">
      <Control flexStart column>
        <Label>City</Label>
        <SelectLocal
          placeholder="Select"
          onChange={e => formHandler(e, 'corrCity')}
        >
          <Option value='Delhi'>Delhi</Option>
          <Option value='Mumbai'>Mumbai</Option>
        </SelectLocal>
        <ValidateMessage>
          {validateMessage('corrCity').messageShow
            ? validateMessage('corrCity').message
            : ''}
        </ValidateMessage>
      </Control>
      <Control flexStart column>
        <Label>State *</Label>
        <SelectLocal
          placeholder="Select"
          onChange={e => formHandler(e, 'corrState')}
        >
          <Option value='Karnataka'>Karnataka</Option>
          <Option value='Haryana'>Haryana</Option>
        </SelectLocal>
        <ValidateMessage>
          {validateMessage('corrState').messageShow
            ? validateMessage('corrState').message
            : ''}
        </ValidateMessage>
      </Control>
    </Control> */}
    <Divider />
    <Control top="15px" flexEnd>
      <Button.Primary
      htmlType='submit'
      form='perosnalInfoForm'
        text="Save and Continue"
        // onClick={() => submitHandler()}
      />
    </Control>
  </Register>
)
}

export default PersonalInfo
