import styled from 'styled-components'

import { Select } from 'antd'

const { Option } = Select

export const LocalSelect = styled(Select)`
  width: ${props => (props.width ? props.width : '100%')};
  line-height: 24px;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  &.ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    background: ${props => (props.white ? '#ffffff' : '#FAFAFB')};
    font-size: 1.1428571428571428em;
    font-weight: 500;
    border-radius: 8px;
    min-height: 50px;
    color: ${props => (props.color ? props.color : '#010E30')};

    & input {
      min-height: 50px;
    }

    & .ant-select-selection-item {
      display: flex;
      align-items: center;
      height: 100%;
    }

    & .ant-select-selection-placeholder {
      display: flex;
      align-items: center;
    }
  }
`

export const LocalOption = styled(Option)``
