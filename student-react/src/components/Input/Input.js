/** props used
 * 1. placeholder
 * 2. type (text, etc)
 * 3. color
 * 4. opacity
 */

import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
  placeholder: `${props.placeholder ? props.placeholder : ''}`,
  type: `${props.type ? props.type : 'text'}`,
}))`
  width: ${props => (props.width ? props.width : '100%')};
  color: ${props => (props.color ? props.color : '#010E30')};
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  background: #fafafb;
  border: 1px solid #e6e7ea;
  border-radius: 8px;
  opacity: ${props => (props.opacity ? props.opacity : '0.4')};
  line-height: 24px;
  margin-top: 8px;
  &:focus {
    outline: none;
    opacity: 1;
    box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
    background-color: #ffffff;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    opacity: 0.4;
  }
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default Input
