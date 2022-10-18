import styled from 'styled-components'

import { DatePicker } from 'antd'

const Date = styled(DatePicker)`
  width: 100%;
  color: ${props => (props.color ? props.color : '#010E30')};
  height: 50px;

  padding: 10px 20px;
  background: #fafafb;
  border: 1px solid #e6e7ea;
  border-radius: 10px;
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
  &:hover {
    border: 1px solid #e6e7ea;
  }
  .ant-picker-input > input {
    font-size: 1.1428571428571428em;
    font-weight: 500;
  }
`
export default Date
