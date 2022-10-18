import React, { useState } from 'react'

import Register from 'modules/Onboarding/Register'

//importing components
import Control from 'components/Control/Control'
import Button from 'components/Button'

//importing supporting pages
import TenthClass from 'modules/Onboarding/Register/Education/TenthClass'
import TwelfthClass from 'modules/Onboarding/Register/Education/TwelfthClass'
import Graduation from 'modules/Onboarding/Register/Education/Graduation'

//importing navigation elements
import { useNavigate } from 'react-router-dom'

import {
  ButtonLocal,
  Text,
  SelectLocalWrapper,
} from 'modules/Onboarding/Register/Education/style'

//importing icons
import AddIcon from 'components/icons/AddIcon'

import { educationDetail } from './data'

const Education = () => {
  const navigate = new useNavigate()

  const { Option } = SelectLocalWrapper

  // parent state containing education details
  const [education, setEducation] = useState([])

  const subjectHandler = e => {
    var arr = []

    if (e === '10th') {
      arr.push({ ...educationDetail('tenth'), component: TenthClass })
    } else if (e === '12th') {
      arr.push({ ...educationDetail('twelfth'), component: TwelfthClass })
    } else if (e === 'UG') {
      arr.push({ ...educationDetail('ug'), component: Graduation })
    } else if (e === 'PG') {
      arr.push({ ...educationDetail('pg'), component: Graduation })
    }

    setEducation(edu => edu.concat(arr))
  }

  console.log(education)

  return (
    <Register heading="Educational Details">
      {education.length
        ? education.map(obj => {
            return (
              <obj.component
                education={education}
                setEducation={setEducation}
              />
            )
          })
        : null}
      {/* the select button is relatively positioned below the customized button */}
      <ButtonLocal>
        <Control alignCenter gap="10px">
          <AddIcon style={{ marginTop: '5px' }} />
          <Text>Add Education</Text>
        </Control>
      </ButtonLocal>
      <SelectLocalWrapper onChange={e => subjectHandler(e)}>
        <Option value="10th">10th</Option>
        <Option value="12th">12th</Option>
        <Option value="Diploma">Diploma</Option>
        <Option value="UG">Degree/UG</Option>
        <Option value="PG">Degree/PG</Option>
      </SelectLocalWrapper>
      <Control width="100%" flexEnd gap="15px" top="35px">
        <Button.Secondary
          text="Back"
          onClick={() => navigate('/user/onboarding/register/personal-info')}
        />
        <Button.Primary
          text="Save & Continue"
          onClick={() =>
            navigate('/user/onboarding/register/project-internship')
          }
        />
      </Control>
    </Register>
  )
}

export default Education
