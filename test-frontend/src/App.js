import styled from 'styled-components';
import './App.css';
import TestLogin from './Components/TestLogin';

function App() {
  return (
    <Conatainer>
      <TestLogin/>
    </Conatainer>
  );
}

export default App;

const Conatainer = styled.div`
  display: flex;
  flex-direction column;
`