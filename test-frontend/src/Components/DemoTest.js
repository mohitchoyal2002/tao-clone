import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'

const DemoTest = () => {
  const {state} = useLocation()
  const {user} = state;
  console.log(user);
  return (
    <Container>
      DemoTest
    </Container>
  )
}

export default DemoTest

const Container = styled.div`

`