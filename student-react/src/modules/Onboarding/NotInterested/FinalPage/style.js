import styled, { StyleSheetManager } from 'styled-components'

import { Input, Radio, Space } from 'antd'

//importing supporting componentes
import Flex from 'components/Flex'

export const Container = styled(Flex)`
  height: 90vh;
  width: 100vw;
  background-color: #e5e5e5;
  gap: 40px;
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
  width: fit-content;
  margin: auto;
`
export const RadioLocal = styled(Radio)`
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: 1px solid #e6e7ea;
  border-radius: 10px;
  width: 100%;
  padding: 15px;

  font-weight: 600;
  color: #4d566e;
`
export const RadioLocalGroup = styled(Radio.Group)`
  width: 100%;
`

export const LocalSpace = styled(Space)`
  width: 100%;
`
export const FlexWrap = styled(Flex)`
  width: 100%;
  height: auto;
`
export const SubText = styled.div`
  font-weight: 500;
  font-size: 1.0714285714285714em;
  line-height: 24px;
  text-align: center;
  color: #999fac;
`

export const LogoSmallText = styled.div`
  font-weight: 500;
  font-size: 0.7857142857142857em;
  line-height: 14px;
  color: #4d566e;
  opacity: 0.3;
`

export const LogoBigText = styled.div`
  font-weight: 700;
  font-size: 1.1428571428571428em;
  line-height: 24px;
  color: #4d566e;
`

export const Logo = styled(Flex)`
  gap: 5px;
`
export const ImageWrap = styled.div``
