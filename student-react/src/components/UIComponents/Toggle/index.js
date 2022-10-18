import React, { useState } from 'react'

import { Container, Left, Right } from 'components/UIComponents/Toggle/style'
import { COLORS } from 'theme'

const Toggle = ({ left, right, width, onClick }, props) => {
  const [current, setCurrent] = useState('left')

  const handleClick = curr => {
    if (curr == 'left') {
      setCurrent('left')
      onClick(false)
    } else {
      setCurrent('right')
      onClick(true)
    }
  }
  return (
    <Container>
      <Left
        color={current == 'left' ? COLORS.PRIMARY : COLORS.GREY_T_80}
        background={current == 'left' ? COLORS.BLUE_T_90 : COLORS.WHITE}
        onClick={() => handleClick('left')}
      >
        {left}
      </Left>
      <Right
        color={current == 'right' ? COLORS.PRIMARY : COLORS.GREY_T_80}
        background={current == 'right' ? COLORS.BLUE_T_90 : COLORS.WHITE}
        onClick={() => handleClick('right')}
      >
        {right}
      </Right>
    </Container>
  )
}

export default Toggle
