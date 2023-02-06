import React from 'react'
import styled from 'styled-components'

const Buttons = (props) => {
  const {index} = props

  return (
    <Container>
      <span>{index+1}</span>
    </Container>
  )
}

export default Buttons

const Container = styled.div`
  color: #000;
  height: 50px;
  width: 50px;
  background: #fff;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`