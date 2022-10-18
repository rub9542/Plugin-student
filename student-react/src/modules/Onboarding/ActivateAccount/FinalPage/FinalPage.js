import React from 'react'
import { useNavigate } from 'react-router-dom'

//importing styled components
import {
  Container,
  Icon,
  TableSubHeading,
  Table,
  TableHeading,
  TableContent,
  Content,
  Salutation,
  Heading,
  Para,
  Hello,
  Points,
  TableContentFlex,
  Anchor,
} from 'modules/Onboarding/ActivateAccount/FinalPage/style'

//importing components
import Input from 'components/Input/Input'

//importing images
import Hand from 'components/images/hand.png'
import Check from 'components/images/check_circle.png'

const FinalPage = () => {
  const navigate = useNavigate()

  const submitHandler = () => {
    navigate('/user/onboarding/register/personal-info')
  }

  return (
    <Container alignCenter column center>
      <Content spaceBetween flexStart column>
        <img src={Hand} />
        <Salutation flexStart column>
          <Hello>Hello Vikram</Hello>
          <Heading>Welcome to PluginLivve</Heading>
          <Para>
            Please complete the registration process to proceeding further.
          </Para>
        </Salutation>
        <Points flexStart column>
          <TableHeading>Quick Instruction</TableHeading>
          <Table column>
            <TableSubHeading>
              Please have all the below documents handy to complete
              registration.
            </TableSubHeading>
            <TableContent flexStart column>
              <TableContentFlex flexStart>
                <Icon>
                  <img src={Check} />
                </Icon>
                <Para>Scan copy of 10th, 12th and college marksheets.</Para>
              </TableContentFlex>
              <TableContentFlex flexStart>
                <Icon>
                  <img src={Check} />
                </Icon>
                <Para>ID Proof (Aadhar/PAN/Passport)</Para>
              </TableContentFlex>
              <TableContentFlex flexStart>
                <Icon>
                  <img src={Check} />
                </Icon>
                <Para>Attachment size should not size 10mb per file</Para>
              </TableContentFlex>
              <TableContentFlex flexStart>
                <Icon>
                  <img src={Check} />
                </Icon>
                <Para>
                  Attachment name should be in the below formar.
                  <br />
                  yourname_documentname.pdf (eg: arjun_10th_marksheet.pdf)
                </Para>
              </TableContentFlex>
            </TableContent>
          </Table>
        </Points>
        <Anchor onClick={() => submitHandler()}>Let's do it</Anchor>
      </Content>
    </Container>
  )
}

export default FinalPage
