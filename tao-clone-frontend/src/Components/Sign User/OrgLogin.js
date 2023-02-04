import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const OrgLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const msg = document.getElementById('msg')

  return (
    <Container id = 'con'>
      <h1>Welcome Again, Please Login</h1>
      <h2 id='msg'></h2>
      <form>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        <button id='btn'>Login</button>
      </form>
    </Container>
  )
}

export default OrgLogin

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  background: url('/images/TakeDemo/background.jpg');
  background-position: center;
  background-size: cover;
  gap: 30px;
  h1{
    margin-bottom: 50px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  #msg{
    font-size: 1.2rem;
    color: #e03838;
  }
  input{
    height: 45px;
    width: 350px;
    font-size: 1.1rem;
    padding: 5px 20px;
    border: none;
    border-radius:40px; 
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.2);
  }
  input:focus{
    outline: none;
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.4);
  }
  button{
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(139.75deg,#EB6B1E 0%,#BA2025 100%);
    color: #fff;
    font-size: 1.2rem;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.17);
    cursor: pointer;
  }
  button: hover{
    background: linear-gradient(139.75deg,#BA2025 0%,#EB6B1E 100%);
  }
  button:focus{
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.4);
    outline: none;
  }
  button:disabled{
    filter: brightness(70%);
    background:#BA2024;
  }
`