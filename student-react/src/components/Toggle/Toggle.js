import React, { useRef } from 'react'

//importing styled components
import { Container, Left, Right } from 'components/Toggle/style'

const Toggle = ({ left, right, width, setState }, props) => {
  const leftRef = useRef()
  const rightRef = useRef()

  const leftClickHandler = () => {
    leftRef.current.style.color = '#3249D7'
    leftRef.current.style.backgroundColor = '#EAEDFB'

    rightRef.current.style.color = '#CCCFD6'
    rightRef.current.style.backgroundColor = '#ffffff'

    setState(false)
  }

  const rightClickHandler = () => {
    rightRef.current.style.color = '#3249D7'
    rightRef.current.style.backgroundColor = '#EAEDFB'

    leftRef.current.style.color = '#CCCFD6'
    leftRef.current.style.backgroundColor = '#ffffff'

    setState(true)
  }

  return (
    <Container>
      <Left onClick={() => leftClickHandler()} ref={leftRef}>
        {left}
      </Left>
      <Right onClick={() => rightClickHandler()} ref={rightRef}>
        {right}
      </Right>
    </Container>
  )
}

export default Toggle
