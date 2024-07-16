import React from 'react';
import { styled } from 'styled-components';
import media  from '../../utilis/responsiveness';
import { useNavigate } from 'react-router-dom';



const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || 'rgba(205, 232, 229, 0.5)'};
    border-radius: ${(props) => props.borderRadius || '12px'};
    border: ${(props) => props.border || '1px solid #EEF7FF'};
    color: #4D869C;
    transition: background-color 0.5s ease;
    cursor: pointer;
    &:hover{
      background-color:#7AB2B2;
      color: white;
    }

`;

const Text = styled.p`
    font-size: ${(props) => props.fontSize || '1.5rem'};
    padding: ${(props) => props.padding || '0 1.5rem'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    ${media.mobile`
      padding:0rem 0.75rem;
      font-size:1.2rem;
      `}
`;

export const CustomButton = ({title, backgroundColor, borderRadius, border, fontSize, padding, titleColor,fontWeight,onClick}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else {
      navigate('/stays/search?destination=all&&category=all');
    }
  };
  return (
    <Button backgroundColor = {backgroundColor} borderRadius = {borderRadius} border={border} onClick = {handleClick}>
        <Text fontSize = {fontSize} padding = {padding} titleColor = {titleColor} fontWeight = {fontWeight}>
            {title}
        </Text>
    </Button>
  )
}
