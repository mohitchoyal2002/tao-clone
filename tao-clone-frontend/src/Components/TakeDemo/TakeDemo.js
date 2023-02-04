import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LoginIcon from '@mui/icons-material/Login';
import {Link, useNavigate} from 'react-router-dom'

const TakeDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate()

  const btn = document.getElementById("sub_btn");

  const declareBlank = () => {
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    btn.disabled = false;
    btn.innerText = "Request A Demo";
  };

  const takeDemo = async (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "...";

    const msg = document.querySelector(".msg");
    const user = {
      name: name,
      email: email,
      phoneNo: phone,
      companyName: company,
    };
    try {
      const res = await axios.post("http://localhost:8080/demo", user);
      console.log(res);
      if (res.status === 200) {
        declareBlank();
        msg.innerHTML = res.data.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrap>
      <HeaderBar>
        <Links>
          <button onClick={()=>{navigate('/org-signup')}}>Sign Up</button>
          <CustomLink to = '/org-login' >Login <LoginIcon fontSize="large"/> </CustomLink>
        </Links>
      </HeaderBar>
      <Container>
        <Info>
          <h1>Schedule a Live TAO Demo</h1>
          <h3>
            Join us for a live, 30-minute demonstration of TAO, the leading open
            source digital assessment platform. Find out how to make TAO your
            one-stop-shop for all of your online assessment needs.
          </h3>
          <p>
            Fill out the form to the right to get in touch with a member of our
            team for a TAO Ignite, Pro or TAO Enterprise platform demo. Make
            sure to include any comments or notes that will help us understand
            what you are looking for from a platform solution so that we can
            best tailor our response to your needs.
          </p>
          <h3>
            Discover why TAO is the preferred platform solution for Education
            and Professional Development.
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
          <p className="msg"></p>
          <form onSubmit={takeDemo}>
            <div>
              <span>Full Name *</span>
              <input
                type="text"
                placeholder="Type Your Name"
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <span>Company Email *</span>
              <input
                type="text"
                placeholder="Type Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <span>Phone No. *</span>
              <input
                type="text"
                placeholder="Type Your Phone No."
                required
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div>
              <span>Company Name *</span>
              <input
                type="text"
                placeholder="Type Company Name"
                required
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
            <button id="sub_btn">Request A Demo</button>
          </form>
        </Form>
      </Container>
    </Wrap>
  );
};

export default TakeDemo;

const Wrap = styled.div`
  background: url("/images/TakeDemo/background.jpg");
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px;
  gap: 100px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const HeaderBar = styled.div`
  width: 80vw;
  height: 70px;
  background: #48a36b ;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px;
  padding-right: 50px;
  
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;
  gap: 40px;
  a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
  button{
    height: 40px;
    width: 100px;
    font-size: 1rem;
    color: #48a36b;
    background #fff; 
    border: none;
    border-radius: 10px;
    font-weight: 550;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  button: hover{
    filter: brightness(90%);
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Container = styled.div`
  display: flex;
  gap: 100px;
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
    gap: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .msg {
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
  }
  button:hover {
    background: #ba2025;
  }
  button:disabled {
    filter: brightness(70%);
    background: #ba2025;
  }
`;
