import { useEffect, useState } from "react";
import styled from "styled-components";
import PlatformComponents from "./PlatformComponents";
import PlatformSolutions from "./PlatformSolutions";


const Discription = () => {

  const [component, setComponent] = useState('Platform Components')

  const listen = ()=>{
    const menuDiv = document.querySelectorAll('.menu')
    menuDiv.forEach((currentDiv)=>{
      currentDiv.addEventListener('click', ()=>{
        const activeDiv = document.querySelectorAll('.active')
        activeDiv[0].className = activeDiv[0].className.replace('active', '');
        currentDiv.classList.add('active')
        const child = currentDiv.firstChild
        setComponent(child.innerHTML)
      })
    })
  }
  
  useEffect(()=>{
    listen()
  }, [])



  return( 
    <Container>
      <Title>
        <h1>Accelerating innovation in <span>Digital Assessment</span></h1>
      </Title>
      <Subtitle>
        <p>
        Our computer based testing platform is ideal for organizations that want the freedom to control their assessment software – from authoring to delivery to reporting – plus the flexibility to choose from scalable solutions to package it together.
        </p>
      </Subtitle>
      <Menu>
        <div className="menu active">
            <span>Platform Components</span>
        </div>
        <div className="menu">
          <span>Platform Solutions</span>
        </div>
      </Menu>
      {component === 'Platform Components' ? <PlatformComponents/> : <PlatformSolutions/>}
    </Container>
  );
};

export default Discription;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  padding: 0;
  h1{
    font-weight: lighter;
  }
  span{
    font-weight: 600;
  }
`
const Subtitle = styled.div`
  padding: 0;
  margin-bottom: 30px;
  margin: 0 25%;
  text-align: center;
  p{
    line-height: 25px;
    font-size: 1.2rem;
  }
`

const Menu = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  .menu{
  display: flex;
  height:100px;
  width: 300px;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background: rgb(235, 235, 235);
  cursor: pointer;
  color: rgb(130, 130, 130);
  font-weight: 500;
  }
  .active{
    background: linear-gradient(134deg, #F6E04B 0%, #A7E5CD 100%);
    box-shadow: -8px 8px 15px 0 rgb(0 0 0 / 10%);
    color: inherit;
  }
`