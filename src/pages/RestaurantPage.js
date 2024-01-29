import React from 'react';
import styled from 'styled-components';
import restaurant from '../models/restaurant';
import CustomActivityCard from '../components/Custom/CustomActivityCard';
import ProductPageHeroSection from '../components/Layout/ProductPageHeroSection';
import media from '../utilis/responsiveness';

const ImageWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  row-gap:2.7rem;
  padding: 2.5rem 0.5rem 0rem 5.5rem;
  ${media.ipadAir`
  grid-template-columns:repeat(2,1fr);`}
  `;

const RestaurantPage = () => {
  return (
    <div>
    <ProductPageHeroSection 
        src = {'assets/images/restaurantpagehero.jpg'}
        title={'Dive into a World of Gourmet Delights'}
        subtitle={'Explore Our Food Paradise'}
        color={'white'}
    />
    <ImageWrapper>
      {restaurant.map(data => <CustomActivityCard data = {data} key={data.name}/>)}
    </ImageWrapper>

    </div>
  )
}

export default RestaurantPage