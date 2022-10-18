import React from 'react'

//import styled components
import {
  Container,
  Row,
  Circle,
  Content,
  ProgressLine,
} from 'modules/Onboarding/Register/ProgressBar/style'
import { useNavigate } from 'react-router-dom'

const ProgressBar = () => {
  const navigate = new useNavigate()

  return (
    <Container>
      <ProgressLine />
      <Row alignCenter>
        <Circle />
        <Content onClick={() => navigate('/user/onboarding/register/personal-info')} >Personal Details</Content>
      </Row>
      <Row alignCenter>
        <Circle />
        <Content onClick={() => navigate('/user/onboarding/register/education')}>Educational Details</Content>
      </Row>
      <Row alignCenter>
        <Circle />
        <Content  onClick={() => navigate('/user/onboarding/register/project-internship')}>Project & Internship</Content>
      </Row>
      <Row alignCenter>
        <Circle />
        <Content  onClick={() => navigate('/user/onboarding/register/work-experience')}>Work Experience</Content>
      </Row>
      <Row alignCenter>
        <Circle />
        <Content  onClick={() => navigate('/user/onboarding/register/course-training')}>Courses & Training</Content>
      </Row>
      <Row alignCenter>
        <Circle />
        <Content  onClick={() => navigate('/user/onboarding/register/proof-documents')}>Proof/Documents</Content>
      </Row>
      <Row alignCenter>
        <Circle />
        <Content  onClick={() => navigate('/user/onboarding/register/additional-details')}>Additional Details</Content>
      </Row>
    </Container>
  )
}

export default ProgressBar
