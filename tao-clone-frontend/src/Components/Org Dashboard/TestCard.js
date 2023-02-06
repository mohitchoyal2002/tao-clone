import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TestCard = (props) => {
  const [test, setTest] = useState(props.test)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)


  useEffect(()=>{
    const interval = setInterval(()=>{
      const now = new Date()
      const time = new Date(test.startTime);
      const hr = Math.abs(time.getHours() - now.getHours())
      const m = Math.abs(time.getMinutes() - now.getMinutes())
      const s = Math.abs(time.getSeconds() - now.getSeconds())
      setHour(hr)
      setMin(m)
      setSec(s)
      return ()=> clearInterval(interval)
    }, 1000)
  }, [])

  return (
    <Container>
      <Title>
        <h1>{test.name}</h1>
      </Title>
      <Status>
        <span id = 'status'>{test.status}</span>
      </Status>
      <Statistics>
        <h2>No. Of Registered Students:</h2>
        <h2>{test.students.length}</h2>
      </Statistics>
      <Statistics>
        <h2>Test will start in: </h2>
        <h2>{`${hour} : ${min} : ${sec}`}</h2>
      </Statistics>
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