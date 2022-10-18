import React,{useEffect, useState} from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import instituteRequest from '../../../../utils/instituteApiServices';
import userApi from '../../../../utils/userApiServices'

//importing styled components
import {
  Container,
  IconMessage,
  SalutationMessage,
  Message,
  Content,
  Salutation,
  Heading,
  Para,
  OTP,
  OTPHeading,
  InputGroup,
  OTPButton,
  OTPMessage,
  SpanBold,
  Span
} from 'modules/Onboarding/ActivateAccount/PageTwo/style'
import {sendOtp, verifyOtp,getStudentData} from '../../actions'

//importing components
import Input from 'components/Input/Input'

//importing images
import Hand from 'components/images/hand.png'
import Check from 'components/images/check_circle.png'
import request from '../../../../utils/request';

const PageTwo = () => {
  
  const navigate = useNavigate()

  const [digits, setDigits] = useState('')

  const dispatch=useDispatch()
  const [clgName, setclg]=useState('')
  const [errmsg, setErrmsg] =useState('')
  const [otp1, setOtp1]=useState('')
  const [otp2, setOtp2]=useState('')
  const [otp3, setOtp3]=useState('')
  const [otp4, setOtp4]=useState('')




  let stdData=useSelector(state => state?.studentData)
  useEffect(()=>{
    // let newId=params.studentId
    let newId='fa1665e9-d219-45ad-bac3-c30e7bb81996'  
    dispatch(getStudentData(newId))
  },[])
  useEffect(()=>{
    checkOtp()
  },[otp4])
  const maskNumber=()=>{
    let num=stdData.admin.phone_number
    let str='',  count=0;
    if(num){
     for(let i=0; i<num.length; i++) {
      if(num.charAt(i)!="-" && count<7 ) {
          str+='*';
          count++;
      }
      else
          str+=num.charAt(i);
  }
  }
 
    return str
  }
  const getClg= async()=>{
    if(stdData.student.instituteCampusId){
      const response = await instituteRequest.get(`/instituteCampus/${stdData.student.instituteCampusId}`)
      if(response.data.data.campusName){
        setclg(response.data.data.campusName)
      }
    }   
    return clgName
  }
  const clickEvent=(first, last,e)=>{
    if(last !== 'last' && e.target.value){
    document.getElementById(last).focus();
    }
    if(last === 'sec'){
      setOtp1(e.target.value)
    }else if(last === 'third'){
      setOtp2(e.target.value)
    }else if(last === 'fourth'){
      setOtp3(e.target.value)
    }else {
      setOtp4(e.target.value)
        }
    // verifyOtp()
  }
  const checkOtp = async() => {
    let otp=''

    if(otp1 && otp2 && otp3 && otp4 ){
      otp=`${otp1}${otp2}${otp3}${otp4}`
      try {
        await  request.post(`/user/verifyotp/${stdData.admin._id}/${otp}`)
        console.log('otp verified successfully')
        history.push('/onboarding/activate3') 
      } 
      catch (error) {
        setErrmsg('incorrect OTP')
        console.log('incorrect OTP', error)
      }
    }
   
  }
  return (
    <Container alignCenter column center>
      <Message flexStart>
        <img src={Hand} />
        <IconMessage column flexStart>
          <Salutation>Hello {stdData.admin.first_name},</Salutation>
          <SalutationMessage>
            Welcome to '{()=>getClg()}' placement service.
          </SalutationMessage>
        </IconMessage>
      </Message>
      <Content spaceBetween flexStart column>
        <Heading>Activate your Account</Heading>
        <Para>
          We will send you a 4-digit ‘One Time Password’ to your registered
          mobile number. Please verify it to proceed further.
          <br />
          <br />A verification code will be sent to +91 {maskNumber()}
        </Para>
        <OTP alignCenter column>
          <OTPHeading>Enter the OTP</OTPHeading>
          <InputGroup>
            <Input placeholder="0" width="50px" type='number'  id='1st' maxLength={1} onChange={(e)=>clickEvent(this, 'sec',e)} />
            <Input
              placeholder="0"
              type='number'
              id='sec'
              width="50px"
              maxLength={1}
              onChange={(e)=>clickEvent(this, 'third',e)} 
            />
            <Input
              placeholder="0"
              width="50px"
              type='number'  id='third'
              maxLength={1}
              onChange={(e)=>clickEvent(this, 'fourth',e)} 
            />
            <Input
              placeholder="0"
              id='fourth'
              width="50px"
              type='number' 
              maxLength={1}
              onChange={(e)=>clickEvent(this, 'last',e)} 
            />
          </InputGroup>
          <Span>{errmsg}</Span>
          <OTPButton onClick={()=> dispatch(sendOtp())}>
            Didn’t receive?<SpanBold >Resend OTP</SpanBold>
          </OTPButton>
          <OTPMessage>
            <div>
              <img src={Check} />
            </div>
            <div>OTP Sent Successfully.</div>
          </OTPMessage>
        </OTP>
      </Content>
    </Container>
  )
}

export default PageTwo
