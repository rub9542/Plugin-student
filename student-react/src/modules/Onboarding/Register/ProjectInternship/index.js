import React, { useState } from 'react'

import Register from 'modules/Onboarding/Register'

//importing components
import Control from 'components/Control/Control'
import Button from 'components/Button'

//adding supporting pages
import Project from 'modules/Onboarding/Register/ProjectInternship/Project'
import { useNavigate } from 'react-router-dom'

import {
  ButtonLocal,
  Text,
} from 'modules/Onboarding/Register/ProjectInternship/style'

//importing icons
import AddIcon from 'components/icons/AddIcon'

const ProjectInternship = () => {
  const [project, setProject] = useState([])
  const [internship, setInternship] = useState([])
  const navigate = new useNavigate()

  const projectHandler = () => {
    var arr = []
    arr.push({ component: Project })
    setProject(pro => pro.concat(arr))
  }

  const internshipHandler = () => {
    var arr = []
    arr.push({ component: Project })
    setInternship(int => int.concat(arr))
  }

  return (
    <Register heading="Project/Internship Details">
      {project.length
        ? project.map(obj => {
            return (
              <>
                <obj.component />
              </>
            )
          })
        : null}
      <ButtonLocal onClick={() => projectHandler()}>
        <Control alignCenter gap="10px">
          <AddIcon style={{ marginTop: '5px' }} />
          <Text>Add Project</Text>
        </Control>
      </ButtonLocal>
      {internship.length
        ? internship.map(obj => {
            return (
              <>
                <obj.component />
              </>
            )
          })
        : null}
      <ButtonLocal
        style={{ marginTop: '30px' }}
        onClick={() => internshipHandler()}
      >
        <Control alignCenter gap="10px">
          <AddIcon style={{ marginTop: '5px' }} />
          <Text>Add internship</Text>
        </Control>
      </ButtonLocal>
      <Control width="100%" flexEnd gap="15px" top="35px">
        <Button.Secondary text="Back" />
        <Button.Primary onClick={() => navigate('/user/onboarding/register/work-experience')} text="Save & Continue" />
      </Control>
    </Register>
  )
}

export default ProjectInternship
