import React from 'react'

import { Typography } from 'antd'

import styled from 'styled-components'

const { Title } = Typography

const LocalTitle = styled(Title)`
  h1.ant-typography,
  div.ant-typography-h1,
  div.ant-typography-h1 > textarea,
  .ant-typography h1 {
    font-size: ${props => (props.size ? props.size : '1em')} !important;
    font-weight: ${props => (props.weight ? props.weight : '500')} !important;
    line-height: ${props =>
      props.lineHeight ? props.lineHeight : '18px'} !important;
    color: ${props => (props.color ? props.color : 'black')} !important;
  }
`
export default LocalTitle
