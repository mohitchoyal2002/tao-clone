import React from 'react'
import styled from 'styled-components'

const ResultCard = (props) => {
  const {data, questionsLength, marks} = props
  console.log(data);
  if(data.status === 'attempted'){
    return (
      <Container>
        <Info>
          <h1>{data.name}</h1>
        </Info>
        <PInfo>
          <h3>Email: {data.email}</h3>
          <h3>Phone: {data.phoneNo}</h3>
        </PInfo>
        <Result>
          <Info>
            <h2>Score: {marks*data.correctAnswer}</h2>
          </Info>
          <PInfo>
            <h3>Total questions: {questionsLength}</h3>
            <h3>Correct Answers: {data.correctAnswer}</h3>
          </PInfo>
          <PInfo>
          <h3>Attempted Questions: {data.totalAttempted}</h3>
          <h3>Incorrect Answers: {questionsLength - data.correctAnswer}</h3>
          </PInfo>
        </Result>
      </Container>
    )
  }
  else{
    return (
      <Container>
        <Info>
          <h1>Name: {data.name}</h1>
        </Info>
        <PInfo>
          <h3>Email: {data.email}</h3>
          <h3>Phone: {data.phoneNo}</h3>
        </PInfo>
        <Result>
          <h1 id='status'>{data.status}</h1>
        </Result>
      </Container>
    )
  }
}

export default ResultCard

const Container = styled.div`
  padding: 20px 50px;
  background:#fff;
  color: #102232;
  display: flex;
  flex-direction: column;
  align-items:center;
  height: 300px;
  width: 85%;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
`

const Info = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
  text-align: center;
  h1, h2, h3{
    margin: 0;
    font-weight: 500;
  }
`
const PInfo = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 80%;
  text-align: center;
  h2,h3{
    font-weight: 500;
  }
  margin:0;
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap:0;
  #status{
    font-size: 3rem;
    font-weight: 500;
  }
  text-transform: capitalize;
`