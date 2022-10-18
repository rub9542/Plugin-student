import styled, { StyleSheetManager } from 'styled-components'

//importing supporting componentes
import Flex from 'components/Flex'

export const Container = styled(Flex)`
  height: 90vh;
  width: 100vw;
  background-color: #e5e5e5;
  gap: 40px;
`

export const Span = styled.span`
color:red;
`
export const Content = styled(Flex)`
  height: auto;
  width: 700px;
  background-color: white;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 6px 10px rgba(86, 94, 106, 0.1);
  padding: 40px 80px;
  gap: 20px;
  border-radius: 10px;
`

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.3em;
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #010e30;
`

export const FormWrapper = styled(Flex)`
  gap: 8px;
  width: 100%;
`

export const UListWrapper = styled.ul``

export const LI = styled.li`
  font-size: 1em;
  line-height: 24px;
  color: #808697;
`
export const Anchor = styled.a`
  font-weight: 600;
  font-size: 1em;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding: 10px;
  background: #3249d7;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
`
