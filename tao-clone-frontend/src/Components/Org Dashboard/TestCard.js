import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const TestCard = (props) => {
  const test = props.test
  const [timeLeft, setTimeLeft] = useState();

  const navigate = useNavigate()

  const msToHMS = (time)=>{
    let seconds = time/ 1000;

    const days = parseInt(seconds/86400)
    seconds = seconds % 86400

    const hours = parseInt(seconds/3600)
    seconds = seconds % 3600;

    const minutes = parseInt(seconds/60)
    
    seconds = parseInt(seconds % 60)
    return `${days < 10 ? "0" + days : days} : ${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`
  }

  const setTimeLeftHandler = ()=>{
    const time = new Date(test.startTime) - Date.now()
    if(time <= 0){
      setTimeLeft(0)
    }
    else{
      setTimeLeft(time)
    }
  } 

  useEffect(()=>{
    const start = document.getElementById('start')
    if(test.status === 'started'){
      start.innerText = "End Test"
    }
    else if(test.status === 'ended'){
      start.innerText = 'Start Test'
    }
    else{
      start.innerText = 'Start Test'
    }
      const interval = setInterval(()=>{
        setTimeLeftHandler()
      }, 1000);
      return ()=> clearInterval(interval)
  }, [])

  const getDuration = (seconds) =>{
    const hours = parseInt(seconds/3600)
    seconds = seconds%3600

    const minutes = parseInt(seconds/60)
    seconds = seconds%60

    return ` ${hours < 10 ? "0" + hours+"hr" : hours+"hr"} : ${minutes < 10 ? "0" + minutes+"min" : minutes+"min"}`
  } 

  const registerStudent = ()=>{
    navigate('/register-student', {state:{test}})
  }

  const startTest = async()=>{
    const name = test.name
    const orgName = test.orgName
    const status = test.status

    try{
      const res = await axios.put('/org/update-status', {name, orgName, status})
      console.log(res.data);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <Container>
      <Title>
        <h1>{test.name}</h1>
      </Title>
      <Status>
        <span id = 'status'>{test.status}</span>
      </Status>
      <Statistics>
        <Data>
          <h3>Registered Students</h3>
          <h3>{test.students.length}</h3>
        </Data>
        <Data>
          <h3 id = 'timeStamp'>Test will start in</h3>
          <h3 id = 'time'>{msToHMS(timeLeft)}</h3>
        </Data>
        <Data>
          <h3>Duration</h3>
          <h3>{getDuration(test.duration)}</h3>
        </Data>
      </Statistics>
      <Actions className='action'>
        <button onClick={registerStudent}>Register the Student</button>
        <button onClick={()=>{navigate('/result', {state:{test}})}}>See Result</button>
        <button onClick={startTest} id='start'>Start Test</button>
      </Actions>
    </Container>
  )
}

export default TestCard

const Container = styled.div`
  color: #102232;
  height: 400px;
  width: 100%;
  margin: 0 100px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;
  font-family: 'Roboto', sans-serif;
  &:hover{
    .action{
      display: flex;
    }
  }
`

const Title = styled.div`
  text-align: end;
`
const Status = styled.div`
  width: 100%;
  text-align: end;
  margin-top: -40px;
  font-size: 1.1rem;
`

const Statistics = styled.div`
  margin-top: 50px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const Actions = styled.div`
  margin-top: 50px;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  button{
    background: linear-gradient(139.75deg,#EB6B1E 0%,#BA2025 100%);
    color: #fff;
    font-size: 1.1rem;
    height: 45px;
    width: 200px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`