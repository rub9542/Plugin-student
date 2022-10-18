import React from 'react'
import { Steps } from 'antd'
import StepsIcon from 'components/icons/StepsIcon'
import StepsCompleted from 'components/icons/StepsCompleted'
import EmptyCircle from 'components/icons/EmptyCircle'
import styled from 'styled-components'
import { COLORS } from 'theme'

const { Step } = Steps

const Title = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  color: ${props => props.textcolor};
`
const StyledStep = styled(Step)`
  .ant-steps-item-title {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${COLORS.GREY_T_90};
  }
`

const AntdSteps = ({
  steps,
  direction = 'vertical',
  size = 'small',
  current = '1',
  ...props
}) => {
  return (
    <Steps direction={direction} size={size} current={current} {...props}>
      {steps?.map((step, index) => (
        <StyledStep
          key={index}
          icon={
            current > step?.activeKey ? (
              <StepsCompleted />
            ) : step?.activeKey == current ? (
              <StepsIcon />
            ) : (
              <EmptyCircle />
            )
          }
          title={
            <Title
              textcolor={
                step?.activeKey == current ? COLORS.GREY_T_30 : COLORS.GREY_T_60
              }
            >
              {step?.title}
            </Title>
          }
        />
      ))}
    </Steps>
  )
}

export default AntdSteps
