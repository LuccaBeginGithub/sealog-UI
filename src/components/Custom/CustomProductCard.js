import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import media from '../../utilis/responsiveness';

const Container = styled.div`
    width: 25rem;
    background-color: white;
    border-radius: 1.2rem;
    overflow: hidden;
    height: 37rem;
    ${
        media.mobile`
        width:29rem;
    `}
    `;

const Image = styled.img`
    width:25rem;
    height:20rem;
    object-fit:cover;
    ${
        media.mobile`
         width:29rem;
    `}
    `;
const DetailsBar = styled.div`
   padding: 0.3rem 1.3rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
    `;

const RatingBar = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 0.5rem 1.3rem;
    align-items: center;
`;
const ProductInfo = styled.div`
    width: 18rem;
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
const ProductName = styled.p`
    font-size:1.4rem;
    font-weight:bold;
    `;
const LocationText = styled.p`
    color:gray;`;
const OriginalPrice = styled.p`
    text-decoration-line:line-through;`;
const DiscountPrice = styled.p``;
const Catrgory = styled.p`
    color: gray;
    `;
const Rating = styled.div`
    display: flex;
    align-items: center;
    `;
const RatingScore = styled.p`
    margin-left:0.6rem;
    `;
const ProductLocation = styled.div`
    display:flex;
    align-items:center;
    `;
const CustomProductCard = ({data}) => {
    const {name, price, location, discountPrice, category, src} = data;
  return (
    <Container>
        <Image src = {src} />
        <DetailsBar>
            <ProductInfo>
                <ProductName>
                    {name}
                </ProductName>
                <ProductLocation>
                    <LocationOnIcon style={{color:'#67729D'}} />
                    <LocationText>
                        {location}
                    </LocationText>
                </ProductLocation>
            </ProductInfo>
            <Price>
                <OriginalPrice>
                    ${price}
                </OriginalPrice>
                <DiscountPrice>
                    ${discountPrice}
                </DiscountPrice>
            </Price>
        </DetailsBar>
        <hr style={{margin:'0.5rem 1rem'}}/>

        <RatingBar>
            <Catrgory>
                {category}
            </Catrgory>
            <Rating>
                <StarIcon style={{color:'gold'}}/>
                <RatingScore>
                    {4.9}
                </RatingScore>
            </Rating>
        </RatingBar>
    </Container>
  )
}

export default CustomProductCard