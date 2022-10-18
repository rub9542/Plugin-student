import styled from 'styled-components'

//importing themes
import Flex from 'components/Flex'
import { COLORS } from 'theme'

export const Container = styled(Flex)`
  margin-top: 10px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 3px 4px;
  border: 1px solid ${COLORS.GREY_T_90};
  border-radius: 10px;
  cursor: pointer;
`

export const Left = styled.div`
  // font-weight: ${FONT.FW_600};
  // font-size: ${FONT.F_SM};
  line-height: 18px;
  color: ${props => props.color};
  background-color: ${props => props.background};
  padding: 10px 20px;
  border-radius: 8px;
  transition: 0.5s;
`

export const Right = styled.div`
  // font-weight: ${FONT.FW_600};
  // font-size: ${FONT.F_SM};
  line-height: 18px;
  color: ${props => props.color};
  background-color: ${props => props.background};
  padding: 10px 20px;
  border-radius: 8px;
  transition: 0.5s;
`
