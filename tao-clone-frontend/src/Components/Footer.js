import styled from "styled-components"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
  return (
    <Container className="footer">
      <HeaderDiv>
        <Logo>
          <img src="/images/logo2.svg" alt="" />
        </Logo>
        <Product>
          <h3>Products</h3>
          <p>Tao Core</p>
          <p>Tao ignite</p>
          <p>Tao Pro</p>
          <p>Tao Enterprice</p>
          <p>Try Tao Now</p>
        </Product>
        <Solutions>
          <h3>Solutions</h3>
          <p>K12</p>
          <p>Higher Ed</p>
          <p>Professional</p>
          <p>Accessbility</p>
          <p>Interoperability</p>
          <p>What are Online Assessment</p>
        </Solutions>
        <Services>
          <h3>Services</h3>
          <p>Cloud Services</p>
          <p>Support</p>
          <p>Partner Integration</p>
          <p>Tao Hub</p>
        </Services>
        <Company>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Tradmark Policies</p>
          <p>Social Responsibility</p>
          <p>Careers</p>
        </Company>
        <Subscribe>
          <h3>Subscribe to Our Blog</h3>
          <div>
          <input type="email" placeholder="Email" />
          <button>Submit</button>
          </div>
        </Subscribe>
      </HeaderDiv>
      <FooterDiv>
        <ImageDiv>
          <img src="/images/google-logo.svg" alt="" />
          <img src="/images/aws-logo.svg" alt="" />
        </ImageDiv>
        <Icons>
          <Icon>
            <TwitterIcon fontSize="large" className="icon"/>
            <FacebookOutlinedIcon fontSize="large" className="icon"/>
            <LinkedInIcon fontSize="large" className="icon"/>
            <GitHubIcon fontSize="large" className="icon"/>
          </Icon>
          <Copyright>
            <CopyrightIcon fontSize="small"/>
            <p> Copyright 2023 Open Assessment Technologies</p>
          </Copyright>
        </Icons>
      </FooterDiv>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  color: #102232;
  margin:0;
  width: 100%;
  height: 50vh;
  background: url('/images/footer-bg.svg');
  background-size: cover;
  background-position: top;
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
`

const HeaderDiv = styled.div`
  display: flex;
  gap: 100px;
`

const Logo = styled.div`
  display: flex;
  img{
    height: 100px;
    width: 100px;
  }
`

const Product = styled.div`

`

const Solutions = styled.div`

`
const Services = styled.div`

`

const Company = styled.div`

`

const Subscribe = styled.div`
  div{
    display: flex;
    border-radius: -4px 4px 15px 0 rgb(0 0 0 / 10%);

  }
  input{
    height: 40px;
    width: 300px;
    border: none;
    display: block;
    font-size: 1rem;
    margin: 10px;
    border-radius: -4px 4px 15px 0 rgb(0 0 0 / 10%);
  }
  input:focus{
    outline: none;
  }

  button{
    background: linear-gradient(139.75deg, #EB6B1E 0%, #BA2025 100%);
    height: 40px;
    width: 150px;
    border: none;
    border-radius: 40px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
`

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 300;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .icon{
    color: #102232;
  }
  .icon:hover{
    opacity: 0.8;
  }
`