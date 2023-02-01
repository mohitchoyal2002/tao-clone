import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect } from "react";
import TypeWritter  from 'typewriter-effect'

const Home = () => {
	
	const bannerTransition = ()=>{
		const sideMenuBtn = document.querySelectorAll('.side__menu')
		const allBanner = document.querySelectorAll('.banner')
		for(let i=0;i<sideMenuBtn.length;i++){
			sideMenuBtn[i].addEventListener('click', (e)=>{
				let currentDiv = document.querySelectorAll('.active');
				let currentBanner = document.querySelectorAll('.display');
				currentDiv[0].className = currentDiv[0].className.replace('active', '')
				currentBanner[0].className = currentBanner[0].className.replace('display', '');
				allBanner[i].classList.add('display');
				sideMenuBtn[i].classList.add('active')
			})
		}

	}

	useEffect(()=>{
		bannerTransition();
	},[])

  return (
    <Wrap>
      <Main className="banner display">
        <LeftContainer>
          <Title>
            Setting the Standard for Excellence in
            <br />
            <span>
						<TypeWritter
							options={{
								strings: ['Digital Assesment', 'Accessbility Tools', 'Item Banking Software', 'Open Source Testing'],
								autoStart: true,
								loop: true,
								cursor: '_'
							}}
							/>
						</span>
          </Title>
          <SubTitle>
            Transform the online testing experience, maximize learners
            potential, and deliver secure and reliable digital assessments. The
            TAO testing platform gives you the freedom, control, and support to
            evolve with today's learners.
          </SubTitle>
          <Buttons>
            <button>Explore K12 Solutions</button>
						<CustomLink to = '/demo'>
							<span>Get Started</span> <ArrowCircleRightIcon/>
						</CustomLink>
          </Buttons>
        </LeftContainer>
        <RightContainer>
					<ImageDiv id="k12"></ImageDiv>
				</RightContainer>
      </Main>
			<Main className="banner" >
        <LeftContainer>
          <Title>
					Setting the Standard for Excellence in
            <br />
            <span>Digital Assessment</span>
          </Title>
          <SubTitle>
					Leverage TAO’s centralized assessment software to streamline the accreditation process and ensure your school’s programs are up to standard.
          </SubTitle>
          <Buttons>
            <button>Explore TAO for Higher Ed</button>
						<CustomLink to = '/demo'>
							<span>Get Started</span> <ArrowCircleRightIcon/>
						</CustomLink>
          </Buttons>
        </LeftContainer>
        <RightContainer>
					<ImageDiv id= 'high'></ImageDiv>
				</RightContainer>
      </Main>
			<Main className="banner">
        <LeftContainer>
          <Title>
            Setting the Standard for Excellence in 
            <br />
            <span id='type'>
							Digital Assessment
						</span>
          </Title>
          <SubTitle>
					Bring together the technology you need to create deeper engagement across all parts of your business in one powerful, secure solution.
          </SubTitle>
          <Buttons>
            <button>Learn More</button>
						<CustomLink to = '/demo'>
							<span>Get Started</span> <ArrowCircleRightIcon/>
						</CustomLink>
          </Buttons>
        </LeftContainer>
        <RightContainer>
					<ImageDiv id="pro"></ImageDiv>
				</RightContainer>
      </Main>
			
			<SideNav>
          <div className="side__menu active">
            <p>K-12</p>
          </div>
          <div className="side__menu">
            <p>Higher Education</p>
          </div>
          <div className="side__menu">
            <p>Professional</p>
          </div>
        </SideNav>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
	.display{
		display: flex;
	}
`;
const Main = styled.div`
  display: none;
  height: 83vh;
  width: 100vw;
  color: #fff;
  background: url("/images/background1.webp");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 83vh;
    background-image: linear-gradient(135deg, #bb2225 0%, #f2a341 100%);
    opacity: 0.95;
    z-index: 10;
  }
	@media (max-width: 1220px){
		flex-direction: column;
	}
`;
const SideNav = styled.div`
  z-index: 10;
  position: absolute;
  top: 400px;
  left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  rotate: -90deg;
  margin: 0;
  padding: 0;
  .side__menu {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    color: #fff;
    z-index: 1000;
    cursor: pointer;
  }
	@media (max-width: 1220px){
		top: 100px;
		left: 50%;
		rotate: 0deg;
	}

  .side__menu:hover {
    color: #000;
    background: #fff;
    box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }
  .active {
    background-image: linear-gradient(134deg, #f2a341 0%, #bb2225 100%);
  }
  .active:hover {
		background: linear-gradient(134deg, #f2a341 0%, #bb2225 100%);
    color: #fff;
  }
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding: 100px 0 10px 200px;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
	@media (max-width: 1220px){
		width: 100vw;
		margin: 10px;
		padding: 0;
		padding: 150px 0 0 50px;
	}
`;


const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 3.5rem;
  font-weight: 400;
  margin: 0;
	span{
		font-weight: bold;
	}
	@media (max-width: 1220px){
		font-size: 2rem;
	}
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  font-family: "Nunito Sans", sans-serif;
  margin-right: 100px;
  line-height: 2rem;
	
`;

const Buttons = styled.div`
  display: flex;
	justify-content: flex-end;
	align-items:center;
  gap: 30px;
	button{
		padding: 20px 40px;
		border-radius: 40px;
		border: none;
		color: #fff;
		background: linear-gradient(139.75deg,#EB6B1E 0%,#BA2025 100%);
		font-size: 1rem;
		cursor: pointer;
	}
	button: hover{
		background: #BA2025;
	}
`;

const CustomLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 1rem;

	&:hover{
		filter: brightness(80%);
	}
`

const RightContainer = styled.div`
  z-index: 100;
	display: flex;
	align-items: flex-end;
	justify-content: center;
  height: 100%;
  width: 50vw;
  padding: 100px 0 10px 0;
	#k12{
		background: url('/images/banner-image.webp');
		background-size: 60%;
		background-position: center;
		background-repeat: no-repeat;
	}
	#high{
		background: url('/images/banner-image2.webp');
		background-size: 60%;
		background-position: center;
		background-repeat: no-repeat;
	}
	#pro{
		background: url('/images/banner-image3.webp');
		background-size: 60%;
		background-position: center;
		background-repeat: no-repeat;
	}
	@media (max-width: 1220px){
		display: none;
	}
`;

const ImageDiv = styled.div`
	height: 80%;
	width: 70%;
	background-size: 60%;
	background-position: center;
	background-repeat: no-repeat;
	
	
`