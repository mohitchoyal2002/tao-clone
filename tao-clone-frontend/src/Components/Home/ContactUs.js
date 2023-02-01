import styled from 'styled-components'


const ContactUs = () => {
  return (
    <Conatiner>
      <Content>
        <h1>Want to <span>Know More?</span></h1>
        <p>Contact us to see how you can seamlessly integrate TAO into your digital learning environment to offer the modern testing experience students and educators deserve.</p>
        <button>Contact Us</button>
      </Content>
    </Conatiner>
  )
}

export default ContactUs

const Conatiner = styled.div`
  margin: 50px 0;
  height: 400px;
  width: 100vw;
  background: url('/images/contact.svg');
  background-size: cover;
  background-position: center;
  padding: 100px 300px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  h1{
    font-size: 2.1rem;
    font-weight: 400;
  }
  span{
    font-weight: bold;
  }
  p{
    width: 55%;
    line-height: 30px;
    font-size: 1.2rem;
    font-weight: light;
  }
  button{
    width: 250px;
    height: 50px;
    color: #ba2025;
    background: #fff;
    border: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
  }
`