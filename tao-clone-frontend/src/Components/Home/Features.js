import styled from "styled-components";

const Features = () => {
  return (
    <Container>
      <Card>
        <ImageDiv>
          <img src="/images/card-img1.webp" alt="" />
        </ImageDiv>
        <Title>
          <h1>Break From Conventional Assessment</h1>
        </Title>
        <Subtitle>
          <p>
            TAO is the only testing platform built on open source and open
            standards to seamlessly integrate with your EdTech tools and evolve
            with digital expectations.
          </p>
        </Subtitle>
        <Buttons>
          <button>Learn More</button>
        </Buttons>
      </Card>
      <Card>
        <ImageDiv>
          <img src="/images/card-img2.webp" alt="" />
        </ImageDiv>
        <Title>
          <h1>Access Open Source Innovations</h1>
        </Title>
        <Subtitle>
          <p>
            Gain early access to innovative testing solutions and benefit from
            the contributions of the TAO community. With TAO, open source
            developments become yours by default.
          </p>
        </Subtitle>
        <Buttons>
          <button>Learn More</button>
        </Buttons>
      </Card>
      <Card>
        <ImageDiv>
          <img src="/images/card-img3.webp" alt="" />
        </ImageDiv>
        <Title>
          <h1>Work with the Experts</h1>
        </Title>
        <Subtitle>
          <p>
            Whether you're upgrading your system or just getting started, our
            team has the decades of industry experience, assessment knowledge,
            and world-class technology expertise to ensure your program's
            success.
          </p>
        </Subtitle>
        <Buttons>
          <button>Learn More</button>
        </Buttons>
      </Card>
      <Card>
        <ImageDiv>
          <img src="/images/card-img4.webp" alt="" />
        </ImageDiv>
        <Title>
          <h1>Get Started on Your Terms</h1>
        </Title>
        <Subtitle>
          <p>
            Get started with the TAO online testing platform out of the box,
            have us customize it to your needs, or enhance the assessment
            software with your own functionality.
          </p>
        </Subtitle>
        <Buttons>
          <button>Learn More</button>
        </Buttons>
      </Card>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-tems: center;
  justify-content: center;
  background: url("/images/background2.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  padding: 50px 100px;
  color: #102232;
  @media (max-width: 1220px) {
    padding: 50px;
    padding-bottom: 150px;
  }
  margin-bottom: 50px;
`;

const Card = styled.div`
  display: flex;
  flex: 1 0 350px;
  width: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 50px;
  &:hover {
    background: rgba(50, 200, 200, 0.4);
    button {
      opacity: 1;
    }
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  padding: 10px;
`;
const Title = styled.div``;

const Subtitle = styled.div``;

const Buttons = styled.div`
  width: 100%;
  margin-top: 20px;
  button {
    width: 200px;
    height: 40px;
    border: none;
    background: #102232;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 30px;
    opacity: 0;
  }
  button:hover {
    background: #fff;
    color: #102232;
  }
`;
