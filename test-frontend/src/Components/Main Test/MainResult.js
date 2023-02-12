import React from 'react'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'

const MainResult = () => {

  const {state} = useLocation()
  const test = state.newdata
  const answers = state.answers
  const loggedUser = state.user
  const count = Object.keys(answers).length
  const questions = test.questions
  let correct = 0;
  const markPerQuestion = test.markPerQuestion;

  const getScore = ()=>{
    return( <span>{correct*markPerQuestion}</span>);
  }

  const getCorrectAnswer = ()=>{
    const givenAns = Object.values(answers)
    givenAns.map((ans, index)=>{
      if(ans === questions[index].answer){
        correct++;
      }
    })
    return( <span>{correct}</span>);
  }

  return (
    <Container>
       <CustomLink to='http://localhost:3000' fontSize='large' id='link'>Go Home</CustomLink>
      <Title>
        <h1>Thank You For Attending The Test</h1>
      </Title>
      <ScoreCard>
        <h1>Score Card</h1>
        <Info>
          <Left>
            <h3>Name: {loggedUser.name}</h3>
            <h3>Organization: {loggedUser.orgName}</h3>
          </Left>
          <Right>
            <h3>Email: {loggedUser.email}</h3>
            <h3>Phone: {loggedUser.phoneNo}</h3>
          </Right>
        </Info>
        <h1>Statistics</h1>
        <Statistics>
          <Left>
            <h3>Total Attempted Questions: {count}</h3> 
            <h3>Total Not-Attempted Questions: {test.questions.length - count}</h3> 
          </Left>
          <Right>
            <h3>Correct Answers: {getCorrectAnswer()}</h3>
          </Right>
        </Statistics>
        <h1>Total Score</h1>
        <h1>{getScore()}</h1>
      </ScoreCard>
    </Container>
  )
}

export default MainResult

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const CustomLink = styled(Link)`
  color: #000;
  font-size: 1.2rem;
  position: absolute;
  top: 100px;
  left: 50px;
  display: flex;
  jutify-content: center;
`
const ScoreCard = styled.div`
  color: #fff;
  width: 70vw;
  padding: 50px;
  background-color: #9dcce0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  h1{
    font-size: 2rem;
  }
`

const Title = styled.div`
  color: #000;
  font-size: 1.5rem;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h3{
    font-size: 1.4rem;
    font-weight: 500;
  }
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
`

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h3{
    font-size: 1.4rem;
    font-weight: 500;
  }
`