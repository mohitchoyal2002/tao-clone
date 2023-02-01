import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";

const CaseStudy = () => {
  return (
    <Container>
      <Carousel autoPlay={true} showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true}>
        <Banner>
          <Temp>

          </Temp>
          <ImageDiv id="div1">

          </ImageDiv>
          <Info>
            <p>"We are excited about the innovation TAO brings, and how it empowers us to create attractive and engaging items that make these assessments more effective."</p>
            <h2>The French Ministry of Education</h2>
            <button>Read case Study</button>
          </Info>
          <TempTwo></TempTwo>
        </Banner>
        <Banner>
          <Temp>

          </Temp>
          <ImageDiv id="div2">

          </ImageDiv>
          <Info>
            <p>"The transition to TAO Enterprise and TAO Cloud allows us to make a shift of focus from technical resources and capacity assurance problems to areas of assessment content development – allowing us to search for and develop flexible and enhanced technical solutions for more complex and innovative assessment formats."</p>
            <h2>Lithuania's National Agency for Education</h2>
            <button>Read case Study</button>
          </Info>
          <TempTwo></TempTwo>
        </Banner>
        <Banner>
          <Temp>

          </Temp>
          <ImageDiv id="div3">

          </ImageDiv>
          <Info>
            <p>"Open Source was not the only factor in the RFP process. We liked TAO’s degree of customization and that it has a demonstrated history of success in other large-scale implementations. Those factors all contributed to our selection of TAO."</p>
            <h2>National Center and State Collaborative</h2>
            <button>Read case Study</button>
          </Info>
          <TempTwo></TempTwo>
        </Banner>
        <Banner>
          <Temp>

          </Temp>
          <ImageDiv id="div4">

          </ImageDiv>
          <Info>
            <p>"TAO’s Open Source nature gave us maximum integration flexibility, intellectual property ownership, and zero perpetual content licensing fee. This combination of features made it a perfect fit for our needs."</p>
            <h2>Elsevier</h2>
            <button>Read case Study</button>
          </Info>
          <TempTwo></TempTwo>
        </Banner>
      </Carousel>
    </Container>
  )
}

export default CaseStudy

const Container = styled.div`
  margin: 50px 0;
  font-family: 'Montserrat', sans-serif;
`

const Banner  = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content:center;
  #div1{
    background-image: url('/images/case1.webp');
  }
  #div2{
    background-image: url('/images/case2.webp');
  }
  #div3{
    background-image: url('/images/case3.webp');
  }
  #div4{
    background-image: url('/images/case4.webp');
  }
`

const Temp = styled.div`
  height: 30px;
  width: 30vw;
  background: linear-gradient(223.35deg, #EB6B1E 50%, #F6E04B 100%);
  z-index: 10;
  margin-right: -30vw;
  position: relative;
  top: 585px;
  left: 30vw;
`

const ImageDiv = styled.div`
  height: 90%;
  width:54.4vw;
  
  background-position: center;
  background-size: cover;
  z-index: 100;
`
const Info = styled.div`
  height: 100%;
  width: 49vw;
  background: linear-gradient(223.35deg, #EB6B1E 0%, #F6E04B 100%);
  z-index: 1000;
  position:relative;
  top: 60px;
  margin-left: -100px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding: 100px 100px;

  p{
    font-size: 1.5rem;
  }
  h2{
    font-size: 1.5rem;
  }
  button{
    height: 45px;
    width: 250px;
    background: linear-gradient(138deg, #EB6B1E 0%, #BA2025 100%);
    border: none;
    border-radius: 50px;
    color: #fff;
    font-size: 1rem;
    margin-top: 90px;
  }
`

const TempTwo = styled.div`
  height: 50px;
  width: 40vw;
  background: #f78da7;
  z-index: 10;
  position: relative;
  top: 20px;
  right: 100px;
  margin-left: -40vw;
  opacity: 0.2;
`