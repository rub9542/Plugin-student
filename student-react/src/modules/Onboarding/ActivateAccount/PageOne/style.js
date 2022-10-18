import styled, { StyleSheetManager } from 'styled-components'

//importing supporting componentes
import Flex from 'components/Flex'

export const Container = styled(Flex)`
  height: 90vh;
  width: 100vw;
  background-color: #e5e5e5;
  gap: 40px;
`

export const Message = styled(Flex)`
  height: auto;
  width: fit-content;
  gap: 30px;
`

export const IconMessage = styled(Flex)`
  gap: 10px;
`

export const Salutation = styled.div`
  font-weight: 700;
  font-size: 1.2857142857142858em;
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #010e30;
`
export const SalutationMessage = styled.div`
  font-weight: 500;
  font-size: 1.0714285714285714em;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #5f6264;
  opacity: 0.87;
`
export const Content = styled(Flex)`
  height: auto;
  width: 700px;
  background-color: white;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 6px 10px rgba(86, 94, 106, 0.1);
  padding: 80px 100px;
  gap: 20px;
  border-radius: 10px;
`
export const Heading = styled.div`
  font-weight: 700;
  font-size: 1.4285714285714286em;
  line-height: 28px;
  color: #010e30;
`
export const Para = styled.div`
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: #676e83;
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
