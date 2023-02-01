import styled from 'styled-components'
import Banner from './Banner'
import CaseStudy from './CaseStudy'
import ContactUs from './ContactUs'
import Discription from './Discription'
import Ecosystem from './Ecosystem'
import Features from './Features'
import TaoPlay from './TaoPlay'

const Home = () => {

  return (
    <Wrap>
        <Banner/>
        <Features/>
        <Discription/>
        <CaseStudy/>
        <Ecosystem/>
        <TaoPlay/>
        <ContactUs/>
    </Wrap>
  )
}

export default Home

const Wrap = styled.div`
    color: #102232;
    display: flex;
    flex-direction: column;
`
