import React from 'react';
import styled from 'styled-components';
import { CustomHeader } from '../Custom/CustomHeader';
import media from '../../utilis/responsiveness';

const Container = styled.section`
`;
const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6rem 3rem;
    ${media.mobile`
        margin: 3rem;
        flex-direction:column;
        `}
`;
const Content = styled.div`
    justify-content: center;
    text-align: center;
    ${media.mobile`
        margin: 1.2rem;
        `}
        `;
const Image = styled.img`
    width:13rem;
    height:13rem;
    `;
const ImageThree = styled.img`
width:10rem;
height:10rem;
margin-bottom: 2.8rem;
`;
const Text = styled.p`
    font-size:2.3rem;

    ;`;
const TextDesc = styled.p`
    font-size:1.8rem;
    color: gray;

    `;

const WorkSection = () => {
  return (
    <Container>
        <CustomHeader title={'How it works'} description={'Keep calm & travel on'}/>
        <ContentWrapper>
            <Content>
                <Image src='assets/images/book-high-resolution-logo-transparent.svg'/>
                <Text>
                    Book & Relax 
                </Text>
                <TextDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </TextDesc>
            </Content>
            <Content>
                <Image src='assets/images/checklist-high-resolution-logo-transparent.svg'/>
                <Text>
                    Smart Checklist
                </Text>
                <TextDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </TextDesc>
            </Content>
            <Content>
                <ImageThree src='assets/images/save-high-resolution-logo-transparent.svg'/>
                <Text>
                    Save More
                </Text>
                <TextDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </TextDesc>
            </Content>
        </ContentWrapper>

    </Container>
  )
}

export default WorkSection