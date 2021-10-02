import React from 'react'
import styled from 'styled-components'
import vid from '../asset/vid.mp4'





const VideoSection = () => {
    //const url = "https://www.youtube.com/watch?v=jyeV7PS5WTk";
    return (
       <Container id="video">
           <Wrapper>
               <Video src={vid} controls loops autoPlay muted/>
           </Wrapper>
       </Container>
    )
}

export default VideoSection

const Video = styled.video`
width: 90%;
height: 80%;
margin: 30px auto;
object-fit: cover;
border-radius: 10px;
`

const Container = styled.div`
width: 100;
height: 100%;
background-color: black;
color: white;

`
const Wrapper = styled.div`
display: flex;
justify-content: center;

`
