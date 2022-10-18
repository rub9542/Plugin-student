import styled from 'styled-components'
import { COLORS } from 'theme'

//importing components
import Flex from 'components/Flex'
import Title from 'components/Typography/Typography'

export const Container = styled.div`
// padding: 20px 25px;
// gap: 8%;
// margin-top: 100px;
// padding-bottom: 100px;

width: 100vw;
height: 100vh;
margin-top: 0;
background-color: #fafafb;
`
export const SubContainer = styled.div`
  width: 85%;
  margin: auto;
`

export const Left = styled.div`
  margin-top: 75px;
  width: 25%;
  height: auto;
  position: absolute;
  background-color: #fafafb;
`

export const Right = styled.div`
  margin-top: 20px;
  width: 50%;
  height: auto;
  padding-top: 15px;
  right: 300px;
  position: absolute;
`

export const H2 = styled.div`
  font-weight: 700;
  font-size: 1.2857142857142858em;
  line-height: 24px;
  color: #4d566e;
  margin-top: ${props => (props.marginTop ? props.marginTop : null)};
`

export const Heading = styled.div`
  font-weight: 700;
  font-size: 1.7em;
  line-height: 30px;
  color: #1b1f22;
`

export const Content = styled.div`
  margin-top: 30px;
  box-shadow: 0px 4px 12px rgba(153, 153, 153, 0.1);
  border-radius: 10px;
  width: 100%;
  background-color: #ffffff;
  padding: 40px 55px;
  height: auto;
  max-height: 70vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const ValidateMessage = styled.div`
  font-weight: 500;
  font-size: 0.8em;
  color: red;
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
