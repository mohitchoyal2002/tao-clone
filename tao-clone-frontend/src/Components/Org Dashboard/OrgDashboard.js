import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const OrgDashboard = () => {
  const navigate = useNavigate()

  const check = async()=>{
    try{
      const res = await axios.get('http://localhost:8080/org/check')
      document.getElementsByTagName('h1').innerTEXT = res.data.token 
      console.log(res.data);
    }
    catch(err){
      console.log(err);
      navigate('/org-login')
    }
  }

  return (
    <Container>
      <h1></h1>
      <button onClick={check}>token</button>
    </Container>
  )
}

export default OrgDashboard

const Container = styled.div`
  padding: 100px 200px;
  height: 100vh;
  background-image: linear-gradient(135deg, #bb2225 0%, #f2a341 100%);
  color: #fff;
`