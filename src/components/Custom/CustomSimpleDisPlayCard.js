import React from 'react';
import styled from 'styled-components';
import CustomImageCard from './CustomImageCard';
import media from '../../utilis/responsiveness';

const Container = styled.div`
`;
const ImageContainer = styled.div`
  width:22rem;
  height:19rem;
  overflow:hidden;
  border-radius:1.5rem;
  cursor: pointer;
  ${media.ipad`
    width:20rem;`}
  ${media.ipadAir`
    width:17.5rem;`}`;
const Text = styled.p`
text-align:center;
font-size:1.9rem;
font-weight:bold;
cursor:pointer;
color:#35A29F;`;
const CustomSimpleDisPlayCard = ({src,alt, text,setCategory}) => {
  const clickHandler = () =>{
    setCategory(text);
  }
  return (
    <Container>
        <ImageContainer onClick={clickHandler}>
        <CustomImageCard src = {src} alt = {alt}  Height={'19rem'} Width={'22rem'} 
        />
        </ImageContainer>
        <Text onClick={clickHandler}>
          {text}
        </Text>
    </Container>
  )
}

export default CustomSimpleDisPlayCard