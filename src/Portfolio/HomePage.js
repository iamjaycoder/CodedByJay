import React, {useState} from 'react'
import styled from 'styled-components'
import Portal from '../Portfolio/Portal'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import VideoSection from './VideoSection'
import ContactSection from './ContactSection'
import SliderSection from './SliderSection'
import FooterSection from './FooterSection'


const HomePage = () => {

const [toggle, setToggle] = useState(false)

const onHandle = () => {
    const check = window.scrollY;

if (check >= 80) {
    setToggle(true)
}
else {
  setToggle(false)
}
}
window.addEventListener("scroll", onHandle);


return (
    <Container>
        <Wrapper>
            <Portal bg={toggle ? "bg" : ""} />
              <HeroSection/>
            <ServiceSection/>
            <VideoSection/>
            <ContactSection/>
            <SliderSection/>
            <FooterSection/>
           

        </Wrapper>
    </Container>
)  
}




export default HomePage;

const Container = styled.div`
font-family: Poppins;
`;
const Wrapper = styled.div`

`