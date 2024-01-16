import React from 'react';
import { CustomHeader } from '../Custom/CustomHeader';
import styled from 'styled-components';
import activity from '../../models/activity';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomActivityCard from '../Custom/CustomActivityCard';
import { mobile } from '../../utilis/responsiveness';

const Container = styled.section`
  margin-top:8rem;
  `;
const StyledSlider = styled(Slider)`
  margin:6rem 4.5rem;
  ${mobile({margin:'2.5rem 4.5rem'})}
  `
;
const ActivitySection = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll:2,
        speed: 500,
        responsive:[{
          breakpoint:620,
          settings:{
            slidesToShow: 1,
            slidesToScroll:1,
          },
        },]
      }
  return (
    <Container>
        <CustomHeader title={'Things to do'} 
            description={'check the best entertainments we select for you'}/>
        <StyledSlider {...settings}>
            {activity.map((data,index)=>(<CustomActivityCard data = {data} key={index}/>))}
        </StyledSlider>
    </Container>
  )
}

export default ActivitySection;