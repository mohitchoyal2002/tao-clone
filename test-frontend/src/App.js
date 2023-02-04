import styled from 'styled-components';
import './App.css';
import TestLogin from './Components/TestLogin';
import DemoTest from './Components/DemoTest'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Conatainer>
      <BrowserRouter>
        <Routes>
          
            <Route path='' element={<TestLogin/>}/>
            <Route path='/test' element={<DemoTest/>}/>
          
        </Routes>
      </BrowserRouter>
    </Conatainer>
  );
}

export default App;

const Conatainer = styled.div`
  display: flex;
  flex-direction column;
`