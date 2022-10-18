import React, { useState, useEffect } from 'react'

//importing Components
import TextArea from 'components/textarea/TextArea'
import Label from 'components/Label/Label'
import {useParams} from "react-router-dom";

import { useDispatch,useSelector } from 'react-redux'
import {notInterested, getStudentData} from '../../actions'
//importing styled components
import {
  Container,
  Content,
  Heading,
  Para,
  Anchor,
  RadioLocal,
  RadioLocalGroup,
  LocalSpace,
  FlexWrap,
  SubText,
  LogoSmallText,
  LogoBigText,
  Logo,
} from 'modules/Onboarding/NotInterested/PageOne/style'

const PageOneNI = () => {
  const [value, setValue] = useState(1)
  const dispatch=useDispatch()
  const params = useParams();
  const studentData=useSelector(state => state.studentData)
  useEffect(()=>{
    // let newId=params.studentId
    let newId='fa1665e9-d219-45ad-bac3-c30e7bb81996'  
    dispatch(getStudentData(newId))
  },[])
  return (
    <Container alignCenter column center>
      <Content spaceBetween flexStart column>
        <Heading>Hello Vikram,</Heading>
        <Para>
          Would you take a moment and tell us the reason for not interested in
          the college placement service.
        </Para>
        <RadioLocalGroup onChange={e => setValue(e.target.value)} value={value}>
          <LocalSpace direction="vertical">
            <RadioLocal value={1}>Going for 'Higher Studies’</RadioLocal>
            <RadioLocal value={2}>Starting my own business</RadioLocal>
            <RadioLocal value={3}>Joining family business</RadioLocal>
            <RadioLocal value={4}>Other (Mention the reason below)</RadioLocal>
          </LocalSpace>
        </RadioLocalGroup>
        {value === 4 ? (
          <FlexWrap flexStart column>
            <Label color="#4D566E">Mention the reason *</Label>
            <TextArea placeholder="Eg: Already got an offer outside college" />
          </FlexWrap>
        ) : null}

        <Anchor href="/user/not-interested/2" onClick={()=>dispatch(notInterested())}>Submit</Anchor>
      </Content>
      <SubText>
        Interested in the placement service?
        <span
          style={{
            textDecoration: 'underline',
            color: '#3249D7',
            cursor: 'pointer',
          }}
        >
          Click here
        </span>
      </SubText>
      <Logo center alignCenter column>
        <LogoSmallText>Powered by</LogoSmallText>
        <LogoBigText>PluginLive</LogoBigText>
      </Logo>
    </Container>
  )
}

export default PageOneNI
