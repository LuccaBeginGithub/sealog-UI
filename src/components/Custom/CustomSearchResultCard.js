import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useNavigate } from 'react-router-dom';
import media from '../../utilis/responsiveness';



const Container = styled.div`
 height:20rem;
 width:70%;
 background-color:#F8F0E5;
 border-radius: 1.2rem;
 overflow: hidden;
 box-shadow: 0 4px 8px #EADBC8;
 padding:1rem;
 display:flex;
 margin-bottom: 3.5rem;
 ${media.ipad`
 width:83%;`}
 ${media.ipadAir`
 width:98%;`}
 ${media.mobile`
    padding:5px;`}
`;
const ImageWrapper = styled.div`
    width:100%;
    height:100%;
    border-radius:1.2rem;
    flex:1;
    overflow:hidden;
    `;

const TextWrapper = styled.div`
    flex:2;
    padding:1rem;
    ${media.mobile`
    padding:5px;`}`;

const Image = styled.img`
    width:110%;
    height:110%;
    object-fit:cover;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover{
        opacity: 0.85;
    }
    `;

const DetailsWrapper = styled.div`
    display:flex;
    justify-content:space-between;`;

const InfoWrapper = styled.div``;

const PassInfoWrapper = styled.div`
    z-index:999;
    margin-top:-2.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    ${media.mobile`
    margin-top:-2rem;`}
    `;

const DescriptionWarpper = styled.div``;

const InfoText = styled.h1`
font-size:2.2rem;
color:#265073;
margin:0;
cursor: pointer;
${media.mobile`
    font-size:1.2rem;
`}
   `;
const Rating = styled.div`
    display: flex;
    align-items: center;
    `;
const RatingScore = styled.p`
    margin-left:0.6rem;
    `;
const Price = styled.div`
width: 4.5rem;
border: 2px solid #2D9596;
border-radius: 0.5rem;
text-align:center;
height:6rem;
align-items:center;
color:  #2D9596;`
 ;

 const OriginalPrice = styled.p`
 text-decoration-line:line-through;`;
const DiscountPrice = styled.p``;
const ProductLocation = styled.div`
    display:flex;
    align-items:center;
    `;
const LocationText = styled.p`
color:gray;
margin-right:0.5rem;`;

const Button = styled.button`
background-color:#2D9596;
margin-top:1rem;
border-radius:18px;
border: 1px solid white;
padding: 0.8rem 2rem;
height:4rem;
cursor: pointer;
text-align:center;
    color:white;
    font-size:1.4rem;
&:hover{
    background-color: #A6CF98;
}
&.active {
   background-color: #A6CF98; 
   color:#F2FFE9;
   border-color:#F2FFE9;
  } 
${media.mobile`
    padding:0 10px;
    font-size:11px;
    border-radius:10px;`}
   `; 
const Des = styled.p`
    color:gray;
    ${media.mobile`
    font-size:10px;
`}`;

const CustomSearchResultCard = ({item}) => {
    const{name,price,location,discountPrice,category,src} = item;
    const navigate = useNavigate() ;
    const directToBookingPage = () =>{
        navigate(`/stays/${name}`);
    }

  return (
    <Container>
        <ImageWrapper>
            <Image src = {src}/>
        </ImageWrapper>
        <TextWrapper>
            <InfoText onClick={directToBookingPage}>
                {name}
            </InfoText>
            <DetailsWrapper>
                
                <InfoWrapper>
                    <div style={{display:'flex',justifyContent:'flex-start'}}>
                        <LocationText>
                            {category}
                        </LocationText>
                        <ProductLocation>
                            <LocationOnIcon style={{color:'#67729D'}} />
                            <LocationText>
                                {location}
                            </LocationText>
                        </ProductLocation>
                    </div>
                    <Rating>
                        <StarIcon style={{color:'gold'}}/>
                        <RatingScore>
                            {4.9}
                        </RatingScore>
                    </Rating>
                </InfoWrapper>
                <PassInfoWrapper>

                    <Price>
                        <OriginalPrice>
                            ${price}
                        </OriginalPrice>
                        <DiscountPrice>
                            ${discountPrice} 
                        </DiscountPrice>
                    </Price>
                    <Link to={`/stays/${name}`}>
                        <Button onClick={directToBookingPage}>
                            Book Now
                        </Button>
                    </Link>
                </PassInfoWrapper>
            </DetailsWrapper>
            <DescriptionWarpper>
                <Des >This is the description text. Replace this with the description of the product.
                The location of your hotel is perfect. It's conveniently situated near popular attractions,
                 making it easy for us to explore the area. The views from our room were stunning. </Des>
            </DescriptionWarpper>
        </TextWrapper>
    </Container>
  )
}

export default CustomSearchResultCard