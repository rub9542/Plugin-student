import styled from 'styled-components'
import { COLORS } from 'theme'

//importing components
import Flex from 'components/Flex'
import Control from 'components/Control/Control'

export const Heading = styled.div`
  font-weight: 600;
  font-size: 1.1428571428571428em;
  line-height: 21px;
  color: #1b1f22;
`

export const ImageUploadWrapper = styled(Flex)`
  background: #f9fafe;
  border: 1px dashed #98a4eb;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  ${ImageUploadWrapper} > ${Control} > div {
    font-weight: 500;
    font-size: 7px;
    line-height: 6px;
    color: #cccfd6;
  }
`
export const UploadText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #3249d7;
`
export const FileInput = styled.input`
  opacity: 0;
  display: block;
  width: 100px;
  position: relative;
  top: -30px;
`
export const MainWrapper = styled(Flex)`
  width: 100%;
  gap: 10px;
`
export const Container = styled(Flex)`
  padding: 0px 20px 0 25px;
  gap: 8%;
  // display:flex;
  // flex-direction:column;
  // margin-top: 30px;
  // padding-bottom: 100px;
`
export const LeftDiv = styled.div`
  width: 20%;
`
export const RightDiv = styled.div`
  width: 50%;
`
export const FormHeading = styled.h2`
  font-style: normal;
  line-height: 24px;
  color: ${COLORS.GREY_T_30};
  margin-bottom: 20px;
`

export const StickyDiv = styled.div`
  position: sticky;
  top: 120px;
`
