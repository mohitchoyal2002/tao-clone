import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const MainTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  let questions = []
  let email
  let orgName
  let testName

  const navigate = useNavigate()

  const {state} = useLocation()
  let newdata;
  if(state === null){
    navigate('/main-login')
  }
  else{
    newdata = state.test
    testName = newdata.name
    questions = newdata.questions
    orgName = newdata.orgName
    email = state.email;
  }

  const [user, setUser] = useState({})
  // console.log(user);

  
  
  useEffect(() => {
    const fetchData = async()=>{
      try{
        const res1 = await axios.get('/student/check')
        setUser(res1.data)
        try{
          const student = {email, orgName, testName}
          const res = await axios.post('/student/check-status', student)
          // console.log(res.data);
          try{
            const res3 = await axios.post('/org/test-status',{orgName, testName})
            // console.log(res3);
          }
          catch(err){
            let error;
            if(err.response.data === 'not-started'){
              error = 'Test is not Started yet, Please Contact Your Organization'
              navigate('/main-login', {state:{error}})
            }
            else{
              error = 'Test has been Ended'
              navigate('/main-login', {state:{error}})
            }
          }
        }
        catch(err){
          const error = 'You have already attempted this test'
          navigate('/main-login', {state:{error}})
        }
        setLoading(false)
      }
      catch(err){
        console.log(err);
        navigate('/main-login')
      }
    }

    fetchData()

  }, []);

  const hide = ()=>{
    const banner = document.getElementById('banner')
    banner.style.display = 'none';
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
    const banner = document.querySelector('#banner')
    banner.style.display = 'block'
  };

  const finalSubmit = async()=>{
    const action = document.querySelector('.action')
    action.disabled = true
    try{
      const newUser = {orgName: orgName, email: user.email, testName: testName}
      // console.log(newUser);
      const res = await axios.put('/student/update-status', newUser)
      // console.log('dsjknkj');
      navigate('/main-result', {state:{answers, newdata, user}})
    }
    catch(err){
      console.log(err);
    }
    finally{
      console.log("finally");
      const action = document.querySelector('.action')
      action.disabled = false
    }
  }

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const handleResetClick = () => {
    setAnswers({});
    setCurrentQuestionIndex(currentQuestionIndex);
  };
  
  if (loading) {
    return (
      <Load id="loading">
        <img src="/images/load.svg" alt="" />
      </Load>
    );
  } else {
    return (
      <Wrap>
        <Confirm id='banner'>
          <Message>
            <h1>Do You Want to Submit the Test</h1>
            <Action>
              <button className='action' onClick={finalSubmit}>Yes</button>
              <button className='action' onClick={hide}>No</button>
            </Action>
          </Message>
        </Confirm>
          <Profile>
            <Name>
              <h2>Name: {user.name}</h2>
              <h3>Company: {user.orgName}</h3>
            </Name>
            <Name>
              <h1>{newdata.name}</h1>
              <h3>Remaining Time:</h3>
            </Name>
            <Name>
              <h3>Email: {user.email}</h3>
              <h3>Phone: {user.phoneNo}</h3>
            </Name>
          </Profile>
          <Container>
            <QueContainer>
              <Question>
                <p>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
                {questions.map((question, index) => {
                  if (index === currentQuestionIndex) {
                    return (
                      <div key={index} id = 'question'>
                        <h2>{question.statement}</h2>

                        {question.options.map((option, optionIndex) => (
                          <p
                            id="option"
                            key={optionIndex}
                            onClick={() => handleOptionClick(option)}
                            style={{
                              backgroundColor:
                                answers[currentQuestionIndex] === option
                                  ? "lightblue"
                                  : "",
                            }}
                          >
                            {optionIndex + 1}: {option}
                          </p>
                        ))}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
                <Button id="reset" onClick={handleResetClick}>Reset</Button>
              </Question>

              <BottomNav>
                <Button onClick={handlePrevClick}>Previous</Button>

                <Button onClick={handleSubmitClick}>Submit</Button>

                <Button onClick={handleNextClick}>Next</Button>
              </BottomNav>
            </QueContainer>
            <Navbar>
              {questions.map((question, index) => {
                return (
                  <Buttons key={index} onClick={() => setCurrentQuestionIndex(index)}>{index+1}</Buttons>
                );
              })}
            </Navbar>
          </Container>
        </Wrap>
    )
  }
}

export default MainTest

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  opacity: 0.5;
  img {
    height: 300px;
    width: 300px;
  }
`;

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

const Confirm = styled.div`
  display: none;
  z-index: 1000;
  height: 100%;
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

const Message = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 350px;
  width: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  button{
    height: 40px;
    width: 100px;
    border: none;
    background: #1ca2d8;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
  button:disabled{
    filter: brightness(60%);
    cursor: not-allowed;
  }
`

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
  display: flex;
  flex-direction: column;
  gap: 20px;
  #question{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  #option{
    cursor: pointer;
    padding: 10px 0;
  }
  #reset{
    width: 150px;
  }
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
const Buttons = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
`
