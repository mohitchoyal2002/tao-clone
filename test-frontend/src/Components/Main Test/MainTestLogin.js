import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const MainTestLogin = () => {
  document.title = "Test Login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");

  const navigate = useNavigate();

  const msg = document.getElementById("msg");
  const btn = document.getElementById("btn");

  const {state} = useLocation()
  if(state){
    setTimeout(()=>{
      msg.innerText = state.error
      msg.style.color = 'red'
    }, 1000)
  }

  const disable = () => {
    msg.innerHTML = "";
    btn.disabled = true;
    btn.innerText = "...";
  };

  const enable = () => {
    btn.disabled = false;
    btn.innerText = "Take Test";
    setEmail("")
    setOrgName("")
    setPassword("")
  };

  const login = async (e) => {
    e.preventDefault();

    disable();

    const user = { email, password, orgName };
    try {
      const res = await axios.post("/student/login", user, {
        withCredentials: true,
      });
      const test = res.data;
      navigate("/main-test", { state: { test, email } });
    } catch (err) {
      msg.innerHTML = "Invalid Credentials, Please Try Again";
      console.log(err);
    } finally {
      enable();
    }
  };

  return (
    <Container id="con">
      <h1>Login to Verify and Start The Your Test</h1>
      <h2 id="msg"></h2>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="text"
          placeholder="Organization Name"
          onChange={(e) => setOrgName(e.target.value)}
          value={orgName}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button id="btn">Take Test</button>
      </form>
    </Container>
  );
};

export default MainTestLogin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  background: url("/images/background.jpg");
  background-position: center;
  background-size: cover;
  gap: 30px;
  h1 {
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  #msg {
    font-size: 1.2rem;
    color: #e03838;
  }
  input {
    height: 45px;
    width: 350px;
    font-size: 1.1rem;
    padding: 5px 20px;
    border: none;
    border-radius: 40px;
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.2);
  }
  input:focus {
    outline: none;
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.4);
  }
  button {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(139.75deg, #eb6b1e 0%, #ba2025 100%);
    color: #fff;
    font-size: 1.2rem;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.17);
    cursor: pointer;
  }
  button: hover {
    background: linear-gradient(139.75deg, #ba2025 0%, #eb6b1e 100%);
  }
  button:focus {
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.4);
    outline: none;
  }
  button:disabled {
    filter: brightness(70%);
    background: #ba2024;
  }
`;
