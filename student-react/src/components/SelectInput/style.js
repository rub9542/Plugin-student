import styled from 'styled-components'

import { Input, Select } from 'antd'

export const SelectLocal = styled(Select)`
  width: fit-content;
  font-size: 1.1428571428571428em;
  color: #494c4e;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #fafafb;
    height: 50px;
    border: 1px solid #d9d9d9;
  }
  &.ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
  &.ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    box-shadow: none !important;
  }
`

export const InputLocal = styled(Input)`
  font-size: 1.1428571428571428em;
  color: #494c4e;
  & .ant-input {
    height: 50px;
  }
  &.ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    box-shadow: none !important;
  }
`
