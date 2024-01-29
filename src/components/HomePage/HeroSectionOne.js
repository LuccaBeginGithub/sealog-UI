import React from 'react';
import styled from 'styled-components';
import { CustomButton } from '../Custom/CustomButton';
import media from '../../utilis/responsiveness';
import {Link} from 'react-router-dom';


const Container = styled.section`
    margin: 0rem 4rem;
    ${media.mobile`
        margin:0rem 1rem;
    `}
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius:2rem;
    overflow: hidden;
`;

const Image= styled.img`
    width: 100%;

`;

const InfoContainer = styled.div`
    position: absolute;
    top:21rem;
    left: 9rem;
    ${media.mobile`
        top:15.5rem;
        left:2rem;
    `}
`;

const Title = styled.h1`
    font-weight:bolder;
    font-size: 6.5rem;
    margin-bottom: 0;
    ${media.ipadAir`
       font-size:4.5rem;
    `}
    ${media.mobile`
       font-size:3rem;
    `}

`;

const Desc = styled.p`
    font-size: 2.5rem;
    ${media.mobile`
       font-size:1.5rem;
    `}
`;

const HeroSectionOne = () => {
  return (
    <Container>
        <ImageContainer>
            <Image src='assets/images/beach.jpg'/>
        </ImageContainer>
        <InfoContainer>
            <Title>
                Air, Beach,<br/> Calm
            </Title>
            <Desc>
                Find and book an amazing experience
            </Desc>
            <Link to="/stays">
                <CustomButton title={'Find Now'} 
                    backgroundColor={'#FFFFDD'} 
                    padding={'0rem 3.5rem'} 
                    border={'2px solid #9AD0C2'}/>
            </Link>
        </InfoContainer>
    </Container>
  )
}

export default HeroSectionOne
