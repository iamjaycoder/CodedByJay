import React from 'react'
import styled from 'styled-components'

const ContactSection = () => {
    return (
       <Container id="contact">
           <Wrapper>
           <Title>Subscribe To Our NewsLetter</Title>
               <Holder>
                   <Input placeholder="Enter your Email"/>
                   <Button>Submit</Button>
               </Holder>
               
           </Wrapper>
       </Container>
    )
}

export default ContactSection;

const Title = styled.div`
font-weight: bold;
font-size: 30px;
margin-bottom: 20px;
`
const Holder = styled.div`
width: 500px;
background-color: white;
border-radius: 40px;
height: 50px;
display: flex;
align-items: center;
`

const Input = styled.input`
border: 0;
outline: none;
flex: 1;
border-radius: 40px;
margin-left: 2px;
padding-left: 10px;
color: black;
font-size: 20px;
`

const Button = styled.button`
border: 0;
outline: none;
background-color: transparent;
color: black;
font-size: 20px;
margin-right: 5px;
cursor: pointer;
`

const Container = styled.div`
width: 100;
min-height: 30vh;
height: 100%;
background-color: blue;
color: white;
`
const Wrapper = styled.div`
display: flex;
height: 30vh;
width: 100%
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 10px;

`
