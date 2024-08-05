import React from 'react'
import styled from 'styled-components';
import { CustomHeader } from '../Custom/CustomHeader';
import CustomProductCard from '../Custom/CustomProductCard';
import product from '../../models/product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomButton } from '../Custom/CustomButton';
import media from '../../utilis/responsiveness';

const Container = styled.section`
    margin:0rem 4.5rem;
    background-color:#F3F3F3;
    border-radius:2.6rem;
    padding: 4.5rem 3rem;
    ${media.mobile`
        margin:0rem 2rem;
        padding:3rem 2.5rem;`}
    `;

const StyledSlider = styled(Slider)`
  margin-top:5rem;
  `
;
const ViewAll = styled.div`
  display: flex;
  justify-content:center;
  margin-top:5rem;
  `;
const HotelSection = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll:2,
    dots:true,
    infinite: false,
    speed: 500,
    responsive:[{
      breakpoint: 520,
      settings:{
        slidesToScroll:1,
        slidesToShow:1
      }
    },{
      breakpoint:1025,
      settings:{
        slidesToScroll:1,
        slidesToShow:3
      }
    },{
      breakpoint:825,
      settings:{
        slidesToScroll:1,
        slidesToShow:2
      }
    }]
  }
  const firstfiveproduct = product.slice(0,5);

  
  return (
    <Container>
        <CustomHeader textAlign={'left'} title={'Book the Best Hotels'} description={'excitement begins here'}/>
        
        <StyledSlider {...settings}>
            {firstfiveproduct.map((data,index)=>(<CustomProductCard data = {data} key={index}/>))}
        </StyledSlider>
        <ViewAll>
        <CustomButton  title={'View all'} padding={'0rem 3rem'} border={'1.3px solid gray'}/>
        </ViewAll>
    </Container>
  )
}

export default HotelSection