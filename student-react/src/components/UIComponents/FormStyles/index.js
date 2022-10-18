import styled from 'styled-components'
import { Form as AntdForm, Divider } from 'antd'
import { COLORS } from 'theme'
// import { FONT } from 'theme/font'

import Flex from 'components/Flex'
import { Radio as AntdRadio } from 'antd'
import Input from 'components/Form/Input'

export const FormItem = styled(AntdForm.Item)`
  margin-bottom: ${props =>
    props.marginbottom ? props.marginbottom : '0px'} !important;
  ${props => props.width && `width: ${props.width}`}
`
export const Form = styled(AntdForm)`
  row-gap: 20px;
  display: flex;
  flex-direction: column;
`
export const StyledDivider = styled(Divider)`
  margin: ${props => (props.margin ? props.margin : '20px 0')};
`
export const FormHeading = styled.h2`
  font-style: normal;
  line-height: 24px;
  color: ${COLORS.GREY_T_30};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '0')};
`
export const SecondaryHeading = styled.h2`
  font-style: normal;
  line-height: 24px;
  color: ${COLORS.GREY_T_30};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '0')};
`
export const FlexWrap = styled(Flex)`
  width: 100%;
  gap: ${props => (props.gap ? props.gap : '0')};
`
export const RadioGroup = styled(AntdRadio.Group)`
  display: flex;
  gap: 15px;
  margin-top: 8px;
  ${props => props?.spaceBetween && 'justify-content: space-between;'}
`
// -----------div for both select and input field----------
export const SelectInputDiv = styled(Flex)`
  margin-bottom: ${props =>
    props.marginbottom ? props.marginbottom : '20px'} !important;
  align-items: flex-end;
  position: sticky;
  align-items: stretch;
  width: ${props => (props.width ? props.width : '100%')};
  border-radius: 8px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-right: 0;
  }
`
export const StyledInput = styled(Input)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`
// -----------div for both select and input field----------

export const RedText = styled.p`
  line-height: 1.5715;
  color: ${COLORS.ERROR};
`
