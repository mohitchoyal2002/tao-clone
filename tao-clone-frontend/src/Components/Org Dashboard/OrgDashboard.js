import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TestCard from './TestCard';

const OrgDashboard = () => {
  document.title = "ORG Dashboard"

  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [tests, setTests] = useState([])

  useEffect(()=>{
    axios.get('/org/check')
    .then((res)=>{
      setUser(res.data.token)
    })
    .catch((err)=>{
      navigate('/org-login')
    })
    axios.get('/org/tests')
    .then((res)=>{
      setTests(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  const renderTests = tests.map((test, index)=>{
    return(
      <TestCard test={test} key = {index}/>
    )
  })

  return (
    <Container>
      <Title>
        <h1>Welcome Again, {user.name}</h1>
        <span>e-assessment Dashboard</span>
      </Title>
      <Menu>
        <button onClick={()=>{navigate('/organize-test')}}>Organize Test <EditOutlinedIcon/></button>
      </Menu>
      <Tests>
        <h1>All Tests</h1>
        {renderTests}
      </Tests>
    </Container>
  )
}

export default OrgDashboard

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  padding: 150px 200px;
  background-image: linear-gradient(135deg, #bb2225 0%, #f2a341 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  text-align: center;
  gap: 10px;
  h1{
    font-size: 2.5rem;
    text-transform: capitalize;
    margin: 0;
  }
  span{
    font-size: 1.2rem;
  }
`

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
  button{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5px;
    color: #333366;
    font-weight: bold;
    border: none;
    background: #fff;
    height: 45px;
    width: 200px;
    border-radius: 10px;
    font-size: 1.1rem;
    box-shadow: 5px 5px 10px rgba(0,0,0, 0.5);
    cursor: pointer;
  }
`

const Tests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
`