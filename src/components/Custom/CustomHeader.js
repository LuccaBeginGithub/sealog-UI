import React from 'react';
import styled from 'styled-components';
import  media from '../../utilis/responsiveness';


const Header = styled.div`
    text-align: ${props =>props.textAlign || 'center'};
    padding-top: 2rem;
    ${
        media.mobile`
        padding-top: 0;
    `}
    `;

const Title = styled.h1`
    font-size:3.5rem;
    font-weight:bold;
    color:#2F3645;
    margin-bottom: 0;
    ${
        media.mobile`
        font-size:2.5rem;
    `}
    `;
const Desc = styled.p`
    font-size:2rem;
    color: gray;
    margin-top: 1rem;
    ${
        media.mobile`
        font-size:1.5rem;
    `}
    `;

export const CustomHeader = ({title,description,textAlign}) => {
  return (
    <Header textAlign = {textAlign}>
            <Title>
                {title}
            </Title>
            <Desc>
                {description}
            </Desc>
        </Header>
   
  )
}
