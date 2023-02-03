import styled from 'styled-components';
import './App.css';
import TestLogin from './Components/TestLogin';
import DemoTest from './Components/DemoTest'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Conatainer>
          <Route path='' element={<TestLogin/>}/>
          <Route path='/test' element={<DemoTest/>}/>
        </Conatainer>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Conatainer = styled.div`
  display: flex;
  flex-direction column;
`