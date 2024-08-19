import React from 'react'
import styled from 'styled-components';
import CustomInput from '../Custom/CustomInput';
import media from '../../utilis/responsiveness';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 17rem 12rem 4rem 4rem;
    ${media.mobile`
        flex-direction:column;
        margin:6rem 2.5rem;`}
    ${media.ipad`
        margin:9.5rem 6.5rem;`}
    ${media.ipadAir`
        flex-direction:column;
        margin:9.5rem 6.5rem;`}
    `;
const InfoWrapper = styled.div`
    width:35rem;
    padding-left: 7rem;
    ${media.mobile`
        width:100%;
        `}
    ${media.ipad`
        padding-left: 1rem;`}
    ${media.ipadAir`
        width:100%;
       `}
    
    `;
const ImageWrapper = styled.div`
    margin-left:7rem;
    ${media.ipadAir`
        margin:9.5rem 0 0 0;`}
    ${media.mobile`
        width:100%;
        overflow:hidden;
    `}    
    `;
const Image = styled.img`
    width:63rem;
    height:38rem;
    object-fit:contain;
    
    ${media.ipad`
        width:48rem;
        height:36rem;`}
    ${media.mobile`
        width:30rem;
        height:24rem;`}
        `;
const Description = styled.p`
    color:gray;
    font-weight: bold;
    font-size: 1.6rem;
    ${media.mobile`
        font-size:1.5rem;`}
    `;
const Title = styled.p`
    font-weight:bold;
    font-size:3.8rem;
    ${media.ipad`
        font-size:3.2rem;`}
    ${media.mobile`
        font-size:2.8rem;`}
   `;

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