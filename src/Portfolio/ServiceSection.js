import React from 'react'
import styled from 'styled-components'
import data from './data.json'

const ServiceSection = () => {
    return (
       <Container id="service">
         <Wrapper>
             {data.map((props) => (
             <Card>
                 <Image src={props.img}/>
                 <Content>
                     <Title>{props.title}</Title>
                     <Desc>{props.desc}</Desc> 
                </Content>
             </Card>
             ))}
             </Wrapper>  
       </Container>
    )
}

export default ServiceSection

const Card = styled.div`
width: 300px;
height: 600px;
background-color: lightblur;
border: 3px solid gray;
border-radius: 5px;
margin: 10px;
transition: all 350ms;
transform: scale(1);

:hover {
    transform: scale(1.03);
    border: 3px solid black;
}
`

const Image = styled.img`
width: 100%;
height: 60%;
object-fit: cover;
background-color: red;
border-radius: 5px 5px 0 0;
`

const Content = styled.div`
color: black;
`

const Title = styled.div`
margin: 10px;
text-align: center;
font-size: 25px;
font-weight: bold;
text-transform: uppercase;
line-height: 1;
`

const Desc = styled.div`
margin: 0 5px;
text-align: center;
`

const Container = styled.div`
width: 100%;
min-height: 80vh;
height: 100%;
color: white;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding-top: 40px;
`
