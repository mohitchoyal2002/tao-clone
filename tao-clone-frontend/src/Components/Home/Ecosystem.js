import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';

const Ecosystem = () => {
  return (
    <Container>
      <Header>
        <Title>
          <h1>The Tao <span>EcoSystem</span></h1>
        </Title>
        <Subtitle>
          <p>We believe the future of education is an open digital ecosystem that unites technologies and accelerates innovation. See how it all comes together through our testing platform components, services and resources.</p>
        </Subtitle>
      </Header>

      <Ecos>
        <Eco>
          <img className='eco' src="/images/eco-1.webp" alt="" />
          <Info>
            <PlusIcon src='/images/plusIcon.svg'/>
            <h3 className='title'>Platfrom Components</h3>
            <h3>Authoring</h3>
          </Info>
        </Eco>
        <Eco>
          <img className='eco' src="/images/eco-2.webp" alt="" />
          <Info>
            <PlusIcon src='/images/plusIcon.svg'/>
            <h3 className='title'>Platfrom Components</h3>
            <h3>Rostering</h3>
          </Info>
        </Eco>
        <Eco>
          <img className='eco' src="/images/eco-3.webp" alt="" />
          <Info>
            <PlusIcon src='/images/plusIcon.svg'/>
            <h3 className='title'>Platfrom Components</h3>
            <h3>Reporting</h3>
          </Info>
        </Eco>
      </Ecos>
      <Ecos>
      <Eco>
          <img className='eco' src="/images/eco-4.webp" alt="" />
          <Info>
            <PlusIcon src='/images/plusIcon.svg'/>
            {/* <h3 className='title'>Platfrom Components</h3> */}
            <h3>Service Suite</h3>
          </Info>
        </Eco>
        <Eco>
          <img className='eco' src="/images/eco-5.webp" alt="" />
          <Info>
            <PlusIcon src='/images/plusIcon.svg'/>
            {/* <h3 className='title'>Platfrom Components</h3> */}
            <h3>Service Suite</h3>
          </Info>
        </Eco>
        <Eco>
          <img className='eco' src="/images/eco-6.webp" alt="" />
          <Info>
            <PlusIcon src='/images/plusIcon.svg'/>
            {/* <h3 className='title'>Platfrom Components</h3> */}
            <h3>Open Source Resources</h3>
          </Info>
        </Eco>
      </Ecos>
    </Container>
  )
}

export default Ecosystem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 50px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

const Title = styled.div`
  text-align: center;
  h1{
    font-size: 2rem;
    font-weight: 400;
  }

  span{
    font-weight: 600;
  }
`

const Subtitle = styled.div`
  text-align: center;
  font-size: 1.1rem;
  line-height: 30px;
`

const Ecos  = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`

const Eco = styled.div`
  display: flex;
  flex: 1 0 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .eco{
    height: 300px;
    width: 300px;
    margin: 40px 0;
  }
  h3{
    margin: 5px;
    font-size: 1rem;
  }
  .title{
    color: #ba2025;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PlusIcon = styled.img`
  height: 50px;
  width: 50px;
`