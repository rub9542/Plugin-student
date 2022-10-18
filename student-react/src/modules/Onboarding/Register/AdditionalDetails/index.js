import React, { useState } from 'react'

import Register from 'modules/Onboarding/Register'

//importing supporting components
import Hobbies from 'modules/Onboarding/Register/AdditionalDetails/Hobbies'
import Languages from 'modules/Onboarding/Register/AdditionalDetails/Languages'
import Locations from 'modules/Onboarding/Register/AdditionalDetails/Locations'
import SocialMedia from 'modules/Onboarding/Register/AdditionalDetails/SocialMedia'

//importing components
import Control from 'components/Control/Control'
import Button from 'components/Button'
import SearchSelect from 'components/SearchInputResponsive/SearchInputResponsive'
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'
import Editor from 'components/Editor/Editor'

//importing styled components
import {
  Heading,
  Text,
} from 'modules/onboarding/Register/AdditionalDetails/style'

//importing icons
import AddIcon from 'components/icons/AddIcon'

const AdditionalDetails = () => {
  const [hobbies, setHobbies] = useState([
    {
      component: Hobbies,
    },
  ])
  const [languages, setLanguages] = useState([
    {
      component: Languages,
    },
    {
      component: Languages,
    },
  ])
  const [locations, setLocations] = useState([
    {
      component: Locations,
    },
  ])
  const [socials, setSocials] = useState([
    {
      component: SocialMedia,
    },
  ])

  const hobbiesHandler = () => {
    var arr = []

    arr.push({
      component: Hobbies,
    })

    setHobbies(hob => hob.concat(arr))
  }

  const languagesHandler = () => {
    var arr = []

    arr.push({
      component: Languages,
    })

    setLanguages(hob => hob.concat(arr))
  }

  const locationHandler = () => {
    var arr = []

    arr.push({
      component: Locations,
    })

    setLocations(hob => hob.concat(arr))
  }

  const socialsHandler = () => {
    var arr = []

    arr.push({
      component: SocialMedia,
    })

    setSocials(hob => hob.concat(arr))
  }

  return (
    <Register heading="Additional Details">
      <Control spaceBetween gap="15px">
        <Control column>
          <Label>Caste *</Label>
          <SearchSelect placeholder="Eg. General" />
        </Control>
        <Control column>
          <Label>Religion *</Label>
          <SearchSelect placeholder="Eg. Hindu" />
        </Control>
      </Control>
      <Control top="40px">
        <Heading>Hobbies</Heading>
      </Control>
      <Control column top="10px">
        <Label>What do you like?</Label>
        {hobbies
          ? hobbies.map(obj => {
              return <obj.component key={obj} />
            })
          : null}
      </Control>
      <Control
        onClick={hobbiesHandler}
        style={{ cursor: 'pointer' }}
        top="10px"
        gap="10px"
        alignCenter
      >
        <AddIcon />
        <Text>Add Hobbies</Text>
      </Control>
      <Control top="40px">
        <Heading>Languages</Heading>
      </Control>
      <Control column top="10px">
        {languages
          ? languages.map(obj => {
              return <obj.component key={obj} />
            })
          : null}
      </Control>
      <Control
        onClick={languagesHandler}
        style={{ cursor: 'pointer' }}
        top="10px"
        gap="10px"
        alignCenter
      >
        <AddIcon />
        <Text>Add Languages</Text>
      </Control>
      <Control top="40px">
        <Heading>Preffered Job Locations (Max 3)</Heading>
      </Control>
      <Control column top="10px">
        <Label>What do you want to work?</Label>
        {locations
          ? locations.map(obj => {
              return <obj.component key={obj} />
            })
          : null}
      </Control>
      <Control
        onClick={locationHandler}
        style={{ cursor: 'pointer' }}
        top="10px"
        gap="10px"
        alignCenter
      >
        <AddIcon />
        <Text>Add Location</Text>
      </Control>
      <Control top="40px">
        <Heading>Social Media</Heading>
      </Control>
      <Control column top="10px">
        {socials
          ? socials.map(obj => {
              return <obj.component key={obj} />
            })
          : null}
      </Control>
      <Control
        onClick={socialsHandler}
        style={{ cursor: 'pointer' }}
        top="10px"
        gap="10px"
        alignCenter
      >
        <AddIcon />
        <Text>Add more links</Text>
      </Control>
      <Control top="40px">
        <Heading>Career Objective</Heading>
      </Control>
      <Control>
        <Editor />
      </Control>
      <Control width="100%" flexEnd gap="15px" top="35px">
        <Button.Secondary text="Back" />
        <Button.Primary text="Save & Continue" />
      </Control>
    </Register>
  )
}

export default AdditionalDetails
