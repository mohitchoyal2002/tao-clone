import React, { useState } from "react";
import styled from "styled-components";

const OrgSignUp = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");

  const msg = document.getElementById('msg')
  const btn = document.getElementById('sub_btn')

  return (
    <Container>
      <Info>
        <h1>Register for Taking Test</h1>
        <h3>
          Welcome to the registration page of TAO Assesment. To get started,
          please fill out the form with your personal information. This will
          allow you to create an account and access all of our online
          assessments and resources.
        </h3>
        <p>
          We take the security of your information very seriously, and we will
          always strive to protect your personal data. Thank you for choosing
          TAO Assessment. We look forward to helping you improve
          your skills and reach your goals.
        </p>
        <h3>
          Discover why TAO is the preferred platform solution for Education and
          Professional Development.
        </h3>
        <ul>
          <li>
            A fast, flexible, secure solution for every type of assessment
          </li>
          <li>100% open source and QTI native</li>
          <li>Build out a custom, open ecosystem</li>
          <li>Break free from proprietary data silos</li>
          <li>Control of your digital assessment solution</li>
          <li>Innovate faster</li>
          <li>Lower your overall cost of technology ownership</li>
        </ul>
      </Info>
      <Form>
        <p id="msg"></p>
        <form>
          <div>
            <span>Org. Name *</span>
            <input
              type="text"
              placeholder="Type Your Organization Name"
              autoFocus
              required
              onChange={(e) => {
                setOrgName(e.target.value);
              }}
              value={orgName}
            />
          </div>
          <div>
            <span>Company Email *</span>
            <input
              type="text"
              placeholder="Type Your Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <span>Phone No. *</span>
            <input
              type="text"
              placeholder="Type Your Phone No."
              required
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              value={phoneNo}
            />
          </div>
          <div>
            <span>Create Password *</span>
            <input
              type="password"
              placeholder="Create Your Pasword"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <span>Re-Type Your Password *</span>
            <input
              type="password"
              placeholder="Re-Type Password"
              required
              onChange={(e) => {
                setRe_password(e.target.value);
              }}
              value={re_password}
            />
          </div>
          <button id="sub_btn">Sign Up</button>
        </form>
      </Form>
    </Container>
  );
};

export default OrgSignUp;

const Container = styled.div`
  display: flex;
  color: #fff;
  background: url("/images/TakeDemo/background.jpg");
  background-position: center;
  background-size: cover;
  gap: 100px;
  padding: 150px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 20px;
  }
  ul {
    list-style: url("/images/TakeDemo/check-icon.svg");
  }
  li {
    margin: 15px;
  }
`;

const Form = styled.div`
  width: 40vw;
  background: #fff;
  text-align: center;
  color: #102232;
  border-radius: 20px;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  #msg {
    color: green;
    font-size: 1.2rem;
  }
  span {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  input {
    height: 45px;
    width: 400px;
    padding: 5px 20px;
    font-size: 1.1rem;
    border: 1px solid rgb(220, 220, 220);
  }
  input:focus {
    outline: none;
  }
  button {
    height: 45px;
    width: 200px;
    border: none;
    background: linear-gradient(139.75deg, #eb6b1e 0%, #ba2025 100%);
    color: #fff;
    font-size: 1.1rem;
    font-weight: 550;
    border-radius: 40px;
    margin-top: 50px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
  button:hover {
    background: #ba2025;
  }
  button:focus {
    outline: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  button:disabled {
    filter: brightness(70%);
    background: #ba2025;
  }
`;
