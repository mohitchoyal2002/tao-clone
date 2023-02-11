import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Result = () => {
  const {state} = useLocation()
  const {test} = state
  console.log(test);
  return (
    <Container>

    </Container>
  )
}

export default Result

const Container = styled.div`
  
`