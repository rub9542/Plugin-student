import React, { useState } from 'react'

import Register from 'modules/Onboarding/Register'

//importing components
import Control from 'components/Control/Control'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

//importing supporting pages
import Course from 'modules/Onboarding/Register/CourseTraining/Course'

import {
  ButtonLocal,
  Text,
} from 'modules/Onboarding/Register/CourseTraining/style'

//importing icons
import AddIcon from 'components/icons/AddIcon'

const CourseTraining = () => {
  const [course, setCourse] = useState([])
  const navigate = new useNavigate()

  const courseHandler = () => {
    var arr = []
    arr.push({ component: Course })
    setCourse(cou => cou.concat(arr))
  }

  return (
    <Register heading="Course/Training Details">
      {course.length
        ? course.map((obj, idx) => {
            return (
              <>
                <obj.component />
              </>
            )
          })
        : null}
      <ButtonLocal onClick={() => courseHandler()}>
        <Control alignCenter gap="10px">
          <AddIcon style={{ marginTop: '5px' }} />
          <Text>Add Courses & Training</Text>
        </Control>
      </ButtonLocal>
      <Control width="100%" flexEnd gap="15px" top="35px">
        <Button.Secondary text="Back" />
        <Button.Primary onClick={() => navigate('/user/onboarding/register/proof-documents')} text="Save & Continue" />
      </Control>
    </Register>
  )
}

export default CourseTraining
