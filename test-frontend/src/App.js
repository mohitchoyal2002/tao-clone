import styled from "styled-components";
import "./App.css";
import TestLogin from "./Components/TestLogin";
import DemoTest from "./Components/DemoTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoResult from "./Components/DemoResult";
import MainTestLogin from "./Components/Main Test/MainTestLogin";
import MainTest from "./Components/Main Test/MainTest";
import MainResult from "./Components/Main Test/MainResult";

function App() {
  return (
    <Conatainer>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TestLogin />} />
          <Route path="/main-login" element={<MainTestLogin/>}/>
          <Route path="/test" element={<DemoTest />} />
          <Route path="/main-test" element={<MainTest/>} errorElement={<MainTestLogin/>}/>
          <Route path="/result" element={<DemoResult />} />
          <Route path="/main-result" element={<MainResult/>}/>
        </Routes>
      </BrowserRouter>
    </Conatainer>
  );
}

export default App;

const Conatainer = styled.div`
  display: flex;
  flex-direction column;
`;
