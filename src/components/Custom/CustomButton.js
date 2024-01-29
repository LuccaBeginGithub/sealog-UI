import React from 'react';
import { styled } from 'styled-components';
import media  from '../../utilis/responsiveness';



const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    border-radius: ${(props) => props.borderRadius || '30px'};
    border: ${(props) => props.border || '2px solid black'};
    cursor: pointer;
    &:hover{
      background-color:#2D9596;
      color: white;
    }

`;

const Text = styled.p`
    font-size: ${(props) => props.fontSize || '1.5rem'};
    padding: ${(props) => props.padding || '0.5rem 1rem'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    ${media.mobile`
      padding:0rem 0.75rem;
      font-size:1.2rem;
      `}
`;

export const CustomButton = ({title, backgroundColor, borderRadius, border, fontSize, padding, titleColor,fontWeight}) => {
  return (
    <Button backgroundColor = {backgroundColor} borderRadius = {borderRadius} border={border}>
        <Text fontSize = {fontSize} padding = {padding} titleColor = {titleColor} fontWeight = {fontWeight}>
            {title}
        </Text>
    </Button>
  )
}
