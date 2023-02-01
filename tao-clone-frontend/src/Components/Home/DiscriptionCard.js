import React from 'react'
import styled from 'styled-components'

const DiscriptionCard = (props) => {
  const {card} = props;
  // console.log(card)
  return (
    // <Fade bottom>
      <Card>
        <ImageDiv>
          <img src={card.image} alt="" />
        </ImageDiv>
        <MainDiv>
          <Info>
            <p>
              {card.info}
            </p>
          </Info>
          <Detail>
            <h2>{card.title}</h2>
            <p>{card.subtitle}</p>
          </Detail>
        </MainDiv>
      </Card>
    // </Fade>
  )
}

export default DiscriptionCard

const Card = styled.div`
  color: #102232;
  display: flex;
  align-items: center;
  flex: 1 0 500px;
  width: 450px;
  height: 350px;
  box-shadow: -4px 4px 15px 0 rgb(0 0 0 / 10%);
  font-family: 'Roboto', sans-serif;
  transition: 0.8 ease-out;
  &:hover{
    transform: translateY(-10px);
  }
`

const ImageDiv = styled.div`
  height: 100%;
  width: 25%;
  background: url('/images/card-back.svg');
  background-position: right;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainDiv = styled.div`
  padding: 20px 100px 20px 30px;
  height: 100%;
  width: 75%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0;
  p{
    margin: 4px;
  }
  &::after{
    content: "";
    height: 4px;
    width: 130px;
    background: linear-gradient(135deg, #F6E04B 0%, #A7E5CD 100%);
  }
`

const Detail = styled.div`
  display:flex;
  flex-direction: column;
  h2{
    text-transform: uppercase;
    font-weight: bold;
    color: #ba2025;
  }
  p{
    font-size: 1rem;
    line-height: 30px;
  }
`