import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ResultCard from './ResultCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Result = () => {
  document.title = "Results"
  const {state} = useLocation()
  const {test} = state
  // console.log(test);
  const students = test.students

  const renderCard = students.map((student, index)=>{
    return(
      <ResultCard data={student} questionsLength = {test.questions.length} marks = {test.markPerQuestion} key={index}/>
    )
  })

  return (
    <Container>
      <CustomLink to='/org-dashboard'><ArrowBackIcon/> Go Back</CustomLink>
      <Title>
        <h1>Test Result of {test.name}</h1>
      </Title>
      <h2>List Of the Students</h2>
      <Lists>
        {renderCard}
      </Lists>
    </Container>
  )
}

export default Result

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 150px 100px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(139.75deg,#EB6B1E 0%,#BA2025 100%);
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  h1{
    font-size: 2rem;
    margin: 0;
  }
`

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`

const CustomLink = styled(Link)`
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #fff;
  position: absolute;
  top: 200px;
  left: 100px;
`