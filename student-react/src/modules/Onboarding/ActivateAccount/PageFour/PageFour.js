import React,{useState, useEffect} from 'react'

//importing components
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'

//importing styled components
import {
  Container,
  Content,
  Heading,
  FormWrapper,
  UListWrapper,
  LI,
  Span,
  Anchor,
} from 'modules/Onboarding/ActivateAccount/PageFour/style'
import { validatePassword } from '../../../../components/validate'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPwd, getStudentData } from '../../actions'

const PageFour = () => {
  const [pwd, setPwd]=useState({value:'', message:''})
  const [pwd2, setPwd2]=useState({value:'', message:''})
  const [msg, setMsg]=useState('')

  const dispatch=useDispatch()
  let studentData=useSelector(state => state?.studentData)
  useEffect(()=>{
    // let newId=params.studentId
    let newId='fa1665e9-d219-45ad-bac3-c30e7bb81996'  
    dispatch(getStudentData(newId))
  },[])
  const checkPwd=(e, type)=>{
    let val=validatePassword(e)
    if(val.isValid){
      if(type === '1'){
        setPwd({...pwd, value:e})
      }else{
        // setPwd2(e)
        setPwd2({...pwd2, value:e})

      }
    }
  }
  const isSubmit =async()=>{
    if(pwd === pwd2){
      if(validatePassword(pwd).isValid && validatePassword(pwd2).isValid){
        // dispatch(resetPwd({"email": studentData.admin.email,"password": pwd}))
        try {
          await request.put(`/user/resetpassword/`,{"email": studentData.admin.email,"password": pwd.value})
          console.log('password reset  successfully')
          Navigate("/user/onboarding/final")        
        } 
        catch(error){
          console.log('Error in publishing role', error)
        }
      }else{
        if(!validatePassword(pwd).isValid){
          setPwd({...pwd, message:validatePassword(pwd).message})
          setMsg(validatePassword(pwd).message)
        }
        if(!validatePassword(pwd).isValid){
          setPwd2({...pwd2, message:validatePassword(pwd2).message})

          setMsg(validatePassword(pwd).message)
        }
      }
    }else{
      setPwd2({...pwd2, message:'Both Passwords should match'})

    }
  }
  return (
    <Container alignCenter column center>
      <Content spaceBetween flexStart column>
        <Heading>Set your account password</Heading>
        <FormWrapper flexStart column>
          <Label>New Password *</Label>
          <Input width="100%" placeholder="Enter Password" onChange={e=> setPwd(e.target.value)} />
          <Span>{pwd.message ? pwd.message : ''}</Span>
        </FormWrapper>
        <FormWrapper flexStart column>
          <Label>Confirm Password *</Label>
          <Input width="100%" placeholder="Enter Password" onChange={e=>setPwd2(e.target.value)}/>
          <Span>{pwd2.message ? pwd2.message : ''}</Span>
        </FormWrapper>
        <UListWrapper>
          <LI>Use 8 or more character</LI>
          <LI>With a mix of letters</LI>
          <LI>Numbers</LI>
          <LI>Symbols</LI>
        </UListWrapper>
        <Anchor onClick={()=>isSubmit()} >Submit</Anchor>
      </Content>
    </Container>
  )
}

export default PageFour
