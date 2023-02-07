import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TestCard = (props) => {
  const [test, setTest] = useState(props.test)
  const [hour, setHour] = useState(10)
  const [min, setMin] = useState(10)
  const [sec, setSec] = useState(10)
  const [days, setDays] = useState(10)
  
  const hours = Math.floor(test.duration/3600)
  const minute = Math.floor((test.duration/60)%60)
  const second = Math.floor((test.duration)%60) 

  let interval = null
  let timer = null

  useEffect(()=>{
      interval = setInterval(()=>{
      const now = new Date()
      const created_date = new Date(test.startTime)
      const time = created_date - now
      
      setDays(Math.floor(time/(1000*60*60*24)))
      setHour(Math.floor(time/(1000*60*60)%24))
      setMin(Math.floor(time/(1000*60)%60))
      setSec(Math.floor(time/(1000)%60))
    }, 1000)
    return ()=> clearInterval(interval)
  }, [days,hour, min, sec])

  useEffect(()=>{
    if(days <= 0 && hour <= 0 && min <= 0 && sec <= 0){
      clearInterval(interval)
      setDays(0)
      setHour(0)
      setMin(0)
      setSec(0)
      axios.put('org/update-status', {name:test.name, orgName: test.orgName, status: 'Started'})
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }, [days,hour, min, sec])

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
          <h3 id = 'time'>{`${days< 10 ? "0"+days:days} : ${hour < 10 ? "0"+hour: hour} : ${min< 10? "0"+min: min} : ${sec < 10? "0"+sec: sec}`}</h3>
        </Data>
        <Data>
          <h3>Duration</h3>
          <h3>{`${"0"+hours}h : ${minute<10 ? "0"+minute : minute}m : ${second<10 ? "0"+second : second}s`}</h3>
        </Data>
      </Statistics>
      <Actions className='action'>
        <button>Register the Student</button>
        <button>Start Test</button>
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