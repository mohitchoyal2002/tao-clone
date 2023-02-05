import styled from 'styled-components';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products'
import { Routes, Route} from 'react-router-dom'
import Resources, { Resourcedown } from './Components/Resources/Resources'
import KnowledgeBase, { Resou } from './Components/KnowledgeBase/KnowledgeBase'
import TakeDemo from './Components/TakeDemo/TakeDemo'
import Footer from './Components/Footer';
import OrgLogin from './Components/Sign User/OrgLogin'
import OrgSignUp from './Components/Sign User/OrgSignUp'
import OrgDashboard from './Components/Org Dashboard/OrgDashboard';



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
          <Route path='/org-login' element = {<OrgLogin/>}/>
          <Route path='/org-signup' element = {<OrgSignUp/>}/>
          <Route path='/org-dashboard' element={<OrgDashboard/>}/>
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
