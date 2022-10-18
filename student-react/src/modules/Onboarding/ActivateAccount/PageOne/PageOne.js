import React, {useState, useEffect } from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import {getStudentData, sendOtp} from '../../actions'
//importing styled components
import {
  Container,
  IconMessage,
  SalutationMessage,
  Message,
  Content,
  Heading,
  Para,
  Anchor,
  Salutation,
} from 'modules/Onboarding/ActivateAccount/PageOne/style'
import { useNavigate } from 'react-router-dom'
import request from '../../../../utils/request'
//importing images
import Hand from 'components/images/hand.png'
import axios from 'axios';

const PageOne = () => {
  const navigate = useNavigate()

  const dispatch=useDispatch()
  const params = useParams();
  const [clgName, setclg]=useState('')
  let studentData=useSelector(state => state?.studentData)
  useEffect(()=>{
    // let newId=params.studentId
    let newId='fa1665e9-d219-45ad-bac3-c30e7bb81996'  
    dispatch(getStudentData(newId))
  },[])
  const maskNumber=()=>{
    let num=studentData.admin.phone_number
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
  const getClg=()=>{
    let name=''
    axios.get(`https://api-inst.staging.pluginlive.com/institutes/instituteCampus/${studentData.student.instituteCampusId}`)
      .then(res => {
        name = res.data;
        if(res.data.data.campusName){
        setclg(res.data.data.campusName)}
        else{
          console.log('no name', res.data.data.campusName          )
        }
        // this.setState({ persons });
      })
    // axios.get(`https://api-inst.staging.pluginlive.com/institutes/instituteCampus/${studentData.student.instituteCampusId}`)
    // .then(response => response.json())
    // .then(data => name=data
    //   // name=data.data.campusName,
    //   // name=data
     
    //   );
    return clgName

  }
//   async getData(){
//     const res = await axios('/data');
//     return await res.json();
//  }
  const sendOtp = async() => {
    // const state = getState()
    // const getData =selectors(state =>).getData(state)
    try {
        await request.post(`/user/sendotp/${studentData.admin._id}`)
        navigate('/user/onboarding/checkotp')

      console.log('otp requested successfully')        
      } catch(error){
      console.log('Error in duplicating role', error)
    }
  }
  return (
    <Container alignCenter column center>
      <Message flexStart>
        <img src={Hand} />
        <IconMessage column flexStart>
          <Salutation>Hello {studentData.admin.first_name},</Salutation>
          <SalutationMessage>
            Welcome to ‘{getClg()}’ placement service.
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
        <Anchor  onClick={()=>sendOtp()}>Send OTP</Anchor>
      </Content>
    </Container>
  )
}

export default PageOne
