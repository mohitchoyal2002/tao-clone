import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const OrganizeTest = () => {
  const { state } = useLocation();
  const { user } = state;
  // console.log(user);

  const [testName, setTestName] = useState("");
  const [duration, setDuration] = useState(60);
  const [markPerQuestion, setMarkPerQuestion] = useState(1);
  const [startTime, setStartTime] = useState();
  const [questions, setQuestions] = useState([]);
  // const [options, setOptions] = useState([]);
  const [statement, setStatement] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [answer, setAnswer] = useState("");

  const createTest = async(e) => {
    e.preventDefault();
    const date = new Date(startTime);
    const actualDuration = duration * 60
    const test = {
      name: testName,
      orgName: user.name,
      duration: actualDuration,
      markPerQuestion: markPerQuestion,
      questions: questions,
      startTime: date,
      students: [],
    };
    const msg = document.getElementById('msg')
    try{
      const res = await axios.post('/org/add-test', test)
      console.log(res.data);
      msg.innerText = "Test has been created"
    }
    catch(err){
      console.log(err);
      msg.innerText = "Something went wrong"
    }

    // console.log(test);
  };

  const addQuestion = () => {
    const options = [option1, option2, option3, option4]

    const question = { statement: statement, options: options, answer: answer };
    setQuestions([...questions, question]);

    setStatement("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
  };

  return (
    <Container>
      <CustomLink to='/org-dashboard'><ArrowBackIcon/> Go Back</CustomLink>
      <h1>{user.name}</h1>
      <h2>Organize The Test</h2>
      <TestForm>
        <h2 id="msg"></h2>
        <input
          type="text"
          autoFocus
          required
          placeholder="Enter Test Name"
          onChange={(e) => {
            setTestName(e.target.value);
          }}
          value={testName}
        />
        <input
          type="number"
          required
          placeholder="Enter The Test Duration (In Minute)"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          value={duration}
        />
        <input
          type="Number"
          required
          placeholder="Marks Per Question"
          onChange={(e) => setMarkPerQuestion(e.target.value)}
          value={markPerQuestion}
        />
        <input
          type="datetime-local"
          required
          onChange={(e) => setStartTime(e.target.value)}
          value={startTime}
        />
        <input
          type="text"
          placeholder="Question Statement"
          onChange={(e) => setStatement(e.target.value)}
          value={statement}
        />
        <input
          type="text"
          placeholder="Option 1"
          onChange={(e) => setOption1(e.target.value)}
          value={option1}
        />
        <input
          type="text"
          placeholder="Option 2"
          onChange={(e) => setOption2(e.target.value)}
          value={option2}
        />
        <input
          type="text"
          placeholder="Option 3"
          onChange={(e) => setOption3(e.target.value)}
          value={option3}
        />
        <input
          type="text"
          placeholder="Option 4"
          onChange={(e) => setOption4(e.target.value)}
          value={option4}
        />
        <input
          type="text"
          placeholder="Answer"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
        />

        <button onClick={addQuestion}>Add Questions</button>
        <button onClick={createTest}>Create Test</button>
      </TestForm>
    </Container>
  );
};

export default OrganizeTest;

const Container = styled.div`
  padding: 200px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: linear-gradient(139.75deg, #eb6b1e 0%, #ba2025 100%);
  color: #fff;
  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    mrgin: 0;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }
`;

const TestForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  margin-top: 50px;
  background: #fff;
  color: #102232;
  border-radius: 20px;
  gap: 30px;
  #msg{
    font-size: 1rem;
    color: green;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  input{
    height: 40px;
    width: 400px;
    border 1px solid rgb(200, 200, 200);
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 1rem;
  }
  button{
    height: 45px;
    width: 200px;
    border: none;
    background:  linear-gradient(139.75deg,#EB6B1E 0%,#BA2025 100%);
    color: #fff;
    border-radius: 45px;
    cursor: pointer;
    font-size: 1rem;
  }
  input:focus, button:focus{
    outline: none;  
  }
  button:hover{
    background: #BA2025;
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  position: absolute;
  top: 200px;
  left: 100px;
`