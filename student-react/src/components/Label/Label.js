/** customizable metrics -
 * 1. color
 * 2. font color
 * 3. font weight
 */

import styled from 'styled-components'

const Label = styled.div`
  text-align: left;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: ${props => (props ? props.color : '#4d566e')};
  font-size: ${props => (props ? props.size : '0.875em')};
  font-weight: ${props => (props ? props.weight : '700')};
`

export default Label
