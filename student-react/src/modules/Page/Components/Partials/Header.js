/* eslint-disable */
import React from 'react'
import Flex from 'components/Flex'
import styled from 'styled-components'
import Avatar from 'components/Avatar'
import PluginLiveLogo from 'components/icons/PluginLiveLogo'

const BREAKPOINT = '999px'

const StyledFlex = styled(Flex)`
  position: static;
  padding: 5px 48px 5px 20px;
  height: 82px;
  margin: 0px -20px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(201, 201, 201, 0.1),
    inset 0px -1px 0px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: ${BREAKPOINT}) {
    padding: 15px 20px 15px 0px !important;
    background: #ffffff;
    margin: 0px !important;
  }
`

const IconWrapper = styled(Flex)`
  background-color: white;
  min-width: 200px;
  max-width: 200px;
  justify-content: center;
`

const Divider = styled.div`
  border-left: 1px solid #e6e7ea;
  margin-right: 25px;
  height: 55px;
`
const Name = styled.div`
  font-weight: 600;
  font-size: 1em;
  line-height: 20px;
  text-align: center;
  color: #1b1f22;
`

const Address = styled.div`
  font-weight: 500;
  font-size: 0.8571428571428571em;
  line-height: 20px;
  text-align: center;
  color: #1b1f22;
  opacity: 0.48;
`

const Institute = styled(Flex)`
  gap: 10px;
`

const Icon = styled.div`
  background-color: gray;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`
const NameAdd = styled(Flex)`
  gap: 3px;
`

const Header = () => {
  return (
    <StyledFlex spaceBetween centerVertically isDisplay={true}>
      <Flex centerVertically>
        <IconWrapper>
          <PluginLiveLogo />
        </IconWrapper>
        <Divider />
        <Institute alignCenter>
          <Icon></Icon>
          <NameAdd column flexStart>
            <Name>Indira Institute of technology</Name>
            <Address>Bengaluru, KA</Address>
          </NameAdd>
        </Institute>
      </Flex>
    </StyledFlex>
  )
}
export default Header
