import React, { useState } from 'react'

import Register from 'modules/Onboarding/Register'
import { useNavigate } from 'react-router-dom'

//importing components
import Control from 'components/Control/Control'
import Button from 'components/Button'

//importing supporting pages
import Experience from 'modules/Onboarding/Register/WorkExperience/Experience'

import {
  ButtonLocal,
  Text,
} from 'modules/Onboarding/Register/WorkExperience/style'

//importing icons
import AddIcon from 'components/icons/AddIcon'

const WorkExperience = () => {
  const [experience, setExperience] = useState([])
  const navigate = new useNavigate()

  const experienceHandler = () => {
    var arr = []
    arr.push({ component: Experience })
    setExperience(exp => exp.concat(arr))
  }

  return (
    <Register heading="Work Experience">
      {experience.length
        ? experience.map((obj, idx) => {
            return (
              <>
                <obj.component />
              </>
            )
          })
        : null}
      <ButtonLocal onClick={() => experienceHandler()}>
        <Control alignCenter gap="10px">
          <AddIcon style={{ marginTop: '5px' }} />
          <Text>Add Work Experience</Text>
        </Control>
      </ButtonLocal>
      <Control width="100%" flexEnd gap="15px" top="35px">
        <Button.Secondary text="Back" />
        <Button.Primary onClick={() =>navigate('/user/onboarding/register/course-training') } text="Save & Continue" />
      </Control>
    </Register>
  )
}

export default WorkExperience
