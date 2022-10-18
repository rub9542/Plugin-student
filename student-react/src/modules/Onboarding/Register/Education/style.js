import styled from 'styled-components'

import Flex from 'components/Flex'
import SelectLocal from 'components/Select/Select'

export const ButtonLocal = styled.button`
  margin-top: 35px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  border-radius: 10px;
  padding: 10px;
`

export const Text = styled.div`
  font-weight: 600;
  font-size: 1em;
  line-height: 18px;
  color: #3249d7;
`
export const Container = styled(Flex)`
  width: 100%;
  height: auto;
  padding: 25px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  border-radius: 10px;
  margin-top: ${props => (props.marginTop ? props.marginTop : '0')};
`
export const Heading = styled.div`
  font-weight: 600;
  font-size: 1.1428571428571428em;
  line-height: 21px;
  color: ${props => (props.color ? props.color : '#010e30')};
`
export const SubHeading = styled.div`
  font-weight: 500;
  font-size: 0.8571428571428571em;
  line-height: 15px;
  color: #999fac;
`

export const SelectLocalWrapper = styled(SelectLocal)`
  position: relative;
  top: -60px;
  opacity: 0;
`

export const HeadingUpload = styled.div`
  margin-top: 10px;
  font-weight: 600;
  font-size: 1em;
  line-height: 18px;
  color: #343e59;
`

export const SubHeadingUpload = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 0.8571428571428571em;
  line-height: 15px;
  color: #999fac;
`

export const GreyText = styled.div`
  font-weight: 700;
  font-size: 0.9285714285714286em;
  line-height: 18px;
  color: #a4a5a7;
`
export const Icon = styled.div`
  margin-right: 5px;
  width: 40px;
  height: 40px;
  background: #ebecee;
  border-radius: 4px;
`
export const HeadingMarksheet = styled.div`
  font-weight: 700;
  font-size: 1em;
  line-height: 20px;
  color: #343e59;
`
export const FileMarksheet = styled.div`
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: #343e59;
`

export const FileInput = styled.input`
  opacity: 0;
  display: block;
  width: 80px;
  position: relative;
  top: -40px;
`
