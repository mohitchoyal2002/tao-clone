import styled from "styled-components";

const TaoPlay = () => {
  return (
    <Wrap>
      <Image src="/images/tao-play.webp" alt="" />
      <Container>
        <h1>See TAO <span>in Action</span></h1>
        <p>Find out how TAO’s online testing platform gives you the freedom, control, and support to evolve with today's learners.</p>
      </Container>
    </Wrap>
  );
};

export default TaoPlay;

const Wrap = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 300px;
  background: linear-gradient(134deg, #F6E04B 0%, #A7E5CD 100%);
  margin-left: -100px;
  padding: 50px  200px;
  h1{
    font-size: 2rem;
    font-weight: 400;
  }
  span{
    font-weight: bold;
  }
`;

const Image = styled.img`
  height: 450px;
  margin-left: -65px;
  z-index: 100;
`