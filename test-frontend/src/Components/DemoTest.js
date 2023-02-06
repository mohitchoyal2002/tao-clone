import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import Buttons from './Buttons'

const DemoTest = () => {
  const {state} = useLocation()
  const {loggedUser} = state;
  
  const [test, setTest] = useState({})
  const [load, setLoad] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    setLoad(true)
    axios.get('/test')
    .then((res)=>{
      setTest(res.data)
      setQuestions(res.data.questions)
    })
    .catch((err)=>[
      console.log(err)
    ]).finally(()=>[
      setLoad(false)
    ])
  }, [])

  const renderButton = questions.map((question, index)=>{
    return(
      <Buttons index = {index} key = {index}/>
    )
  })
  


  return (
    <Wrap>
      <Profile>
          <Name>
            <h2>Name: {loggedUser.name}</h2>
            <h3>Company: {loggedUser.companyName}</h3>
          </Name>
          <Name>
            <h1>Demo Test</h1>
          </Name>
          <Name>
            <h3>Email: {loggedUser.email}</h3>
            <h3>Phone: {loggedUser.phoneNo}</h3>
          </Name>
      </Profile>
      <Container>
        <QueContainer>
          <Question>
            {/* <h1>{}</h1> */}
          </Question>
          <BottomNav>

          </BottomNav>
        </QueContainer>
        <Navbar>
          {load && <div id='load'></div>}
          {renderButton}
        </Navbar>
      </Container>
    </Wrap>
  )
}

export default DemoTest

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  gap: 20px;
  #load{
    height: 60px;
    width: 60px;
    background: url('/images/load.svg');
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
  }
`

const Profile = styled.div`
  height: 15vh;
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #9cbcf0;
  color: #fff;
`

const Name = styled.div`
  display: flex;
  flex-direction: column;
`


const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 100vw;
  gap: 20px;

`

const QueContainer = styled.div`
  height: 100vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
`

const Question = styled.div`
  height: 80px;
  margin: 50px;
  background: white;
`

const Navbar = styled.div`
  padding: 50px;
  height: 100vh;
  width: 25vw;
  background: #aae5f0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 50px));
  gap: 20px;
`

const BottomNav = styled.div`
  height: 80px;
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0;
  left 0;
  margin: 0 20px;
`