import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';

const Container = styled.div`
    width: 29rem;
    background-color: #F3F3F3;
    border-radius: 1.2rem;
    overflow: hidden;
    height: 37rem;
    `;

const Image = styled.img`
    width:29rem;
    height:22rem;
    object-fit:cover;`;
const DetailsBar = styled.div`
   padding: 0.3rem 1.3rem;
   align-items: center;
   width: 26rem;
    `;
const ProductName = styled.p`
    font-size:1.7rem;
    font-weight:bold;
    margin: 0.2rem;
    `;
const LocationText = styled.p`
    color:gray;
    margin:0.1rem;`;


const ProductLocation = styled.div`
    display:flex;
    align-items:center;
    `;
const Rating = styled.div`
    display:flex;
    color:#2D9596;
    align-items:center;`;
const Score = styled.p`
    margin-left:0.5rem;`;
const PriceInfo = styled.p`
    font-size:1.5rem;
    font-weight:bold;
    margin: 0.2rem;
    `;

const CustomActivityCard = ({data}) => {
    const {name,  location,  category, src,reviewer, price} = data;
  return (
    <Container>
        <Image src = {src} />
        <DetailsBar>
                <ProductName>
                    {name}
                </ProductName>
                <ProductLocation>
                    <LocationOnIcon style={{color:'#67729D'}} />
                    <LocationText>
                        {location}
                    </LocationText>
                </ProductLocation>
                <Rating>
                    {[1,2,3,4,5].map(item=><CircleIcon
                        style={{color:'#2D9596'}}
                    />)}
                    <Score>
                        {reviewer}
                    </Score>
                </Rating>
                <LocationText>
                    {category}
                </LocationText>
                <PriceInfo>
                    {'From $'+price+' per adult'}
                </PriceInfo>
        </DetailsBar>
    </Container>
  )
}

export default CustomActivityCard