import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RegisterStudent = () => {
  const { state } = useLocation();
  const { test } = state;

  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('')

  const navigate = useNavigate();
  
  const btn = document.getElementById('btn')
  const msg = document.getElementById('msg')

  const disable = ()=>{
    btn.disabled = true
    msg.innerText = ''
  }
  const clear = ()=>{
    btn.disabled = false;
    setName('')
    setEmail('')
    setPhoneNo('')
  }

  const register = async(e)=>{
    e.preventDefault()
    const orgName = test.orgName
    const testName = test.name
    const student = {name, email, phoneNo, orgName, testName}

    try{
      disable()
      const res = await axios.post(`/org/register`, student);
      msg.innerText = res.data
      msg.style.color = 'green'
    }
    catch(err){
      console.log(err);
      msg.innerText = 'Something went wrong'
      msg.style.color = 'red'
    }
    finally{
      clear()
    }
  }

  useEffect(() => {
    axios
      .get("/org/check")
      .then((res) => {
        setUser(res.data.token);
      })
      .catch((err) => {
        navigate("/org-login");
      });
  }, []);

  return (
    <Container>
      <CustomLink to='/org-dashboard'><ArrowBackIcon fontSize="large"/> Back</CustomLink>
      <Title>
        <h1>Students Registration Portal</h1>
      </Title>
      <Main>
        <h2>{test.orgName}</h2>
        <h1>{test.name}</h1>
        <span id="msg"></span>
        <form onSubmit={register}>
          <div>
            <span>Name*</span>
            <input
              type="text"
              placeholder="Student Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              autoFocus
              required = 'true'
            />
          </div>
          <div>
          <span>Email*</span>
            <input
              type="text"
              placeholder="Student Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required = 'true'
            />
          </div>
          <div>
          <span>Phone No.*</span>
            <input
              type="text"
              placeholder="Phone No."
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              value={phoneNo}
              required = 'true'
            />
            </div>
            <button id="btn">Register Student</button>
        </form>
      </Main>
    </Container>
  );
};

export default RegisterStudent;

const Container = styled.div`
  padding: 150px 100px;
  height: 100vh;
  background: linear-gradient(135deg, #bb2225 0%, #f2a341 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #fff;
`;

const Title = styled.div`
  text-align: center;
  text-transform: capitalize;
  h1 {
    font-size: 2.5rem;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: #fff;
  border-radius: 20px;
  color: #102232;
  h1{
    margin: 0 0 50px 0;
  }
  h2{
    margin: 0;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  input{
    height: 45px;
    width: 400px;
    border: 1px solid rgb(220, 220, 220);
    padding: 0 20px;
    font-size: 1rem;
    border-radius: 5px;
  }
  input:focus{
    outline: none;
  }
  button{
    height: 45px;
    width: 200px;
    border: none;
    color: #fff;
    background: linear-gradient(139.75deg,#EB6B1E 0%,#BA2025 100%);
    border-radius: 45px;
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover{
    background: #BA2025;
  }
  button:focus{
    outline: none;
  }
  button:disabled{
    filter: brightness(70%);
    cursor: not-allowed;
  }
`;

const CustomLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  position: absolute;
  top: 200px;
  left: 100px;
`