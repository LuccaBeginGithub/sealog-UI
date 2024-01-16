import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
    /* border-radius: ${(props) => props.BorderRadius || '2rem'}; */
    transition: transform 0.6s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover{
        transform: scale(1.1);
    }
`;

const Image = styled.img`
    width: ${(props) => props.Width || '34rem' };
    height: ${(props) => props.Height || '34rem' };
    object-fit: cover;
    `;

const CustomImageCard = ({src, alt,Width,Height}) => {
  return (
    <ImageContainer >
        <Image src = {src} alt = {alt} Width = {Width} Height = {Height}/>
    </ImageContainer>
  )
}

export default CustomImageCard