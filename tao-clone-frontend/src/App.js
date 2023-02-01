import styled from 'styled-components';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products'
import { Routes, Route} from 'react-router-dom'
import Resources, { Resourcedown } from './Components/Resources/Resources'
import KnowledgeBase, { Resou } from './Components/KnowledgeBase/KnowledgeBase'
import TakeDemo from './Components/TakeDemo/TakeDemo'
import Footer from './Components/Footer';

function App() {
  return (
    <Wrap>
        <Header/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/resources' element={<><Resources/> <Resourcedown/></>}/>
          <Route path='/knowledge-base' element = {<><KnowledgeBase/> <Resou/> </>}/>
          <Route path='/demo' element={<TakeDemo/>}/>
        </Routes>
        <Footer/>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
