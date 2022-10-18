import styled from 'styled-components'

//importing components
import Flex from 'components/Flex'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Row = styled(Flex)`
  width: 100%;
`

export const ProgressLine = styled.div`
  height: 80%;
  width: 1px;
  background-color: #e6e7ea;
  position: absolute;
  left: 10px;
  margin-top: 20px;
`

export const ProgressLineCompleted = styled.div`
  height: ${props => (props.percent ? props.percent : 0)};
  width: 1px;
  background-color: blue;
  position: absolute;
  left: 10px;
  margin-top: 20px;
  z-index: 90;
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #f9fafe;
  border: 1px solid #d6dbf7;
  border-radius: 50%;
  margin-right: 15px;
  z-index: 90;
`

export const Content = styled.div`
  font-weight: 500;
  font-size: 1.1428571428571428em;
  line-height: 21px;
  color: #4d566e;
  padding: 15px;
  padding-left: 0;
  width: 60%;
  border-bottom: 1px solid #e6e7ea;
`
