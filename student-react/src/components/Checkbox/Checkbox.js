/**
 * padding
 */

import styled from 'styled-components'

import { Checkbox } from 'antd'

const CheckboxLocal = styled(Checkbox)`
  font-weight: 500;
  font-size: 1em;
  line-height: 18px;
  color: #343e59;
  padding: ${props => (props.padding ? props.padding : '0')};
`
export default CheckboxLocal
