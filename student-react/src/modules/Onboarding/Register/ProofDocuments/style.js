import styled from 'styled-components'

import Select from 'components/Select/Select'

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 16px;

  ${Ul} > li {
    width: fit-content;
    min-width: 135px;
  }

  font-weight: 400;
  font-size: 0.8em;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #343e59;
`

export const Heading = styled.div`
  font-weight: 600;
  font-size: 1.14em;
  line-height: 21px;
  color: #010e30;
`

export const SelectLocal = styled(Select)`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    position: relative;
    background-color: #fff;
    border: none;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: white;
    border: none;
    height: 50px;
    padding: 10px;
  }
`
