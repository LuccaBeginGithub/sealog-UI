import React from 'react';
import styled from 'styled-components';
import CustomImageCard from './CustomImageCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Container = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   padding: 2rem;
   align-items: center;
    `;
const Title = styled.p`
    font-size:2.2rem;
    font-weight:bold;
    margin-bottom: 0;
    margin-top: 1rem;
    cursor: pointer;
    `;
const LocationBar = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
  `;
const LocationText = styled.p`
    color:gray;
    margin-left: 0.7rem;
    `;
const ImageContainer = styled.div`
    border-radius: 2rem;
    overflow:hidden;
    `;


const CustomContentCard = ({data,setDestination}) => {
  const {src,alt,title,location} = data;

  const sendTitletoParentComponent = ()=>{
    if(setDestination){
    setDestination(title);
    }

  }

  return (
   
    <Container>
        <ImageContainer onClick={sendTitletoParentComponent}>
        <CustomImageCard src={src} alt = {alt}/>
        </ImageContainer>
        <Title onClick={sendTitletoParentComponent}>
            {title}
        </Title>
        <LocationBar>
           <LocationOnIcon fontSize='5.5rem' color='gray' />
           <LocationText>
              {location}
           </LocationText>
        </LocationBar>
    </Container>
   
  )
}

export default CustomContentCard