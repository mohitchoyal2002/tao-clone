import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Buttons from "./Buttons";

const DemoTest = (props) => {
  const { state } = useLocation();
  const { loggedUser } = state;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [test, setTest] = useState({});
  const [load, setLoad] = useState(false);
  
  useEffect(() => {
    setLoad(true);
    axios
      .get("/test")
      .then((res) => {
        setTest(res.data);
        if(res.data.questions){
          setQuestions(res.data.questions)
        }
      })
      .catch((err) => [console.log(err)])
      .finally(() => [setLoad(false)]);
  }, []);

  const renderQuestion = (index)=>{
    const{statement, options, answer} = questions[index]
    console.log("jdjk");
    console.log(statement);
    return(
      <div>
         <h1>{statement}</h1>
         <ul>
         {options.map(option => (
          <>
         {console.log(option)}
          <li key={option}>{option}</li>
          </>
        ))}
       </ul>
       </div>
    )
  }

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handleSubmitClick = () => {
    // Handle the submit logic
  };
  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const renderButton = questions.map((question, index) => {
    return <Buttons index={index} key={index} />;
  });

  

  return (
    <Wrap>
      <Profile>
        <Name>
          <h2>Name: {loggedUser.name}</h2>
          <h3>Company: {loggedUser.companyName}</h3>
        </Name>
        <Name>
          <h1>Demo Test</h1>
        </Name>
        <Name>
          <h3>Email: {loggedUser.email} </h3>
          <h3>Phone: {loggedUser.phoneNo}</h3>
        </Name>
      </Profile>
      <Container>
        <QueContainer>
          <Question id='que'>

            {/* {questions[currentQuestionIndex].options.map((option) => (
              <p
                key={option}
                onClick={() => handleOptionClick(option)}
                style={{
                  backgroundColor:
                    answers[currentQuestionIndex] === option ? "lightblue" : "",
                }}
              >
                {option}
              </p>
            ))} */}
          </Question>

          <BottomNav>
            <Button onClick={handlePrevClick}>Previous</Button>

            <Button onClick={handleSubmitClick}>Submit</Button>

            <Button onClick={handleNextClick}>Next</Button>
          </BottomNav>
        </QueContainer>
        <Navbar>{renderButton}</Navbar>
      </Container>
    </Wrap>
  );
};

export default DemoTest;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  gap: 20px;
  #load {
    height: 60px;
    width: 60px;
    background: url("/images/load.svg");
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
  }
`;

const Profile = styled.div`
  height: 15vh;
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #9cbcf0;
  color: #fff;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 100vw;
  gap: 20px;
`;

const QueContainer = styled.div`
  color: #000;
  height: 100vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  height: 80px;
  margin: 50px;
  background: white;
  color: #000;
  gap: 50px;
`;

const Navbar = styled.div`
  padding: 50px;
  height: 100vh;
  width: 25vw;
  background: #aae5f0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 50px));
  gap: 20px;
`;

const BottomNav = styled.div`
  height: 80px;
  width: 70%;
  background: white;
  position: fixed;
  bottom: 0;
  left 0;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #1ca2d8;
  color: #1ca2d8;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 18px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background: #1ca2d8;
    color: #fff;
  }
`;
