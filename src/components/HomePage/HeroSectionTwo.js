import React from 'react'
import styled from 'styled-components';
import CustomInput from '../Custom/CustomInput';
import { mobile } from '../../utilis/responsiveness';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 17rem 12rem 4rem 4rem;
    ${mobile({flexDirection:'column',
        margin:'6rem 3.5rem'})}

    `;
const InfoWrapper = styled.div`
    width:35rem;
    padding-left: 7rem;
    ${mobile({width:'30rem',paddingLeft:'3rem'})}
    `;
const ImageWrapper = styled.div`
    margin-left:7rem;
    ${mobile({margin:'9.5rem 0rem 0rem 0rem'})}
    `;
const Image = styled.img`
    width:63rem;
    height:38rem;
    object-fit:contain;
    ${mobile({width:'37rem', height:'24rem'})}
    `;
const Description = styled.p`
    color:gray;
    font-weight: bold;
    font-size: 1.6rem;
    ${mobile({fontSize:'1.5rem'})}
    `;
const Title = styled.p`
    font-weight:bold;
    font-size:3.8rem;
    ${mobile({fontSize:'2.8rem'})}`;

const HeroSectionTwo = () => {
  return (
    <Container>
        <InfoWrapper>
            <Description>
                SUPERCHARGE YOUR PLANNING POWERS
            </Description>
            <Title>
                Travel to make memories all around the world
            </Title>
            <Description>
             Subscribe and follow our latest travel news
            </Description>
            <CustomInput/>
        </InfoWrapper>
        <ImageWrapper>
            <Image src = {'assets/images/bathing-beach.png'}/>
        </ImageWrapper>
    </Container>
  )
}

export default HeroSectionTwo