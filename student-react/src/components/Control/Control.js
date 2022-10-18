/**
 * customizable params
 * 1. top
 * 2. width
 * 3. gap
 * 4. background
 * 5. border
 * 6. borderRadius
 * 7. padding
 */

import styled from 'styled-components'

import Flex from 'components/Flex'

const Control = styled(Flex)`
  margin-top: ${props => (props ? props.top : null)};
  width: ${props => (props.width ? props.width : '100%')};
  gap: ${props => (props.gap ? props.gap : '0')};
  background: ${props => (props.background ? props.background : null)};
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '8px')};
  padding: ${props => (props.padding ? props.padding : '0')};
`

export default Control
