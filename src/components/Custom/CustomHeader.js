import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../utilis/responsiveness';

const Header = styled.div`
    text-align: ${props =>props.textAlign || 'center'};
    padding-top: 2rem;
    `;

const Title = styled.h1`
    font-size:4rem;
    font-weight:bold;
    margin-bottom: 0;
    ${mobile({fontSize:'2.5rem'})}`;

const Desc = styled.p`
    font-size:2rem;
    color: gray;
    margin-top: 1rem;
    ${mobile({fontSize:'1.5rem'})}
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
