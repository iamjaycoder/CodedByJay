import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderSection = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
       <Container>
           <Wrapper>
            <Slider {...settings}>
                <Div>1</Div>
                <Div>2</Div>
                <Div>3</Div>
                <Div>4</Div>
            </Slider>
           </Wrapper>
       </Container>
    )
}

export default SliderSection;

const Div = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
padding-left: 10px;
font-size: 25px;
font-weight: bold;
`

const Container = styled.div`
width: 100%;
height: 500px;
background-color: red;
`

const Wrapper = styled.div`
width: 80%;
height: 500px;
margin: 0 auto;
background-color: lightblue;
`
