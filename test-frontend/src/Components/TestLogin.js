import React, { useState } from 'react'
import styled from 'styled-components'


const TestLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <h1>Login to Verify and Start The Test</h1>
      <form>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        <button>Take Test</button>
      </form>
    </Container>
  )
}

export default TestLogin

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  background: url('/images/background.jpg');
  background-position: center;
  background-size: cover;
  h1{
    margin-bottom: 50px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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
`