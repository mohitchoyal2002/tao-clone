import React, { useState } from "react";
import styled from "styled-components";

const TakeDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  return (
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
          team for a TAO Ignite, Pro or TAO Enterprise platform demo. Make sure
          to include any comments or notes that will help us understand what you
          are looking for from a platform solution so that we can best tailor
          our response to your needs.
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
        <form>
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
          <button>Request A Demo</button>
        </form>
      </Form>
    </Container>
  );
};

export default TakeDemo;

const Container = styled.div`
  background: url("/images/TakeDemo/background.jpg");
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
  display: flex;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 200px;
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
  }
`;
