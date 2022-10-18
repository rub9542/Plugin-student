/**
 * 1. width
 * 2. color
 */

import React from 'react'

import styled from 'styled-components'

//importing components from antD
import { Select } from 'antd'
const { Option } = Select

const SelectLocal = styled(Select)`
  width: ${props => (props.width ? props.width : '100%')};
  color: ${props => (props.color ? props.color : '#010E30')};
  height: 50px;
  font-size: 1.14em;
  background: #fafafb;
  border: 1px solid #e6e7ea;
  border-radius: 10px;
  opacity: ${props => (props.opacity ? props.opacity : '0.4')};
  line-height: 24px;
  margin-top: 8px;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    opacity: 0.4;
  }
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: #fafafb;
    border: 1px solid #e6e7ea;
    height: 50px;
    padding: 10px;
  }
  &.ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 50px;
    font-weight: 500;
    color: #343e59;
    width: 100%;
    background-color: white;
  }
  &.ant-select-arrow {
    display: none;
  }
`

export default SelectLocal
