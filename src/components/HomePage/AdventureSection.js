import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomHeader } from '../Custom/CustomHeader';

const Container = styled.section``;


const SliderBar = styled(Slider)`
     margin:0rem 2rem;
     align-items: center;
     
`;

const SliderContent = styled.div`
    
    margin:5.5rem 2.5rem;
    width:24rem;
    height:5rem;
    align-items: center;
    `;

const Image = styled.img`
    width:24rem;
    height:5rem;
        `;
const Places = styled.div``;

const AdventureSection = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinite:true,
        responsive:[{
            breakpoint:620,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }],
    };
  return (
    
    <Container>
        <CustomHeader title={' Start your adventure'}
            description={'select our amazing options'}
        />
        <SliderBar {...settings}>
            <SliderContent>
                <Image src='assets/images/luxury-hotel-high-resolution-logo-transparent.png' />
                <Places>

                </Places>
            </SliderContent>
            <SliderContent>
                <Image src='assets/images/resort-high-resolution-logo-transparent.png'/>
            </SliderContent>
            <SliderContent>
                <Image src='assets/images/yacht-high-resolution-logo-transparent.png'/>
            </SliderContent>
            <SliderContent>
                <Image src='assets/images/house-high-resolution-logo-transparent.png'/>
            </SliderContent>
            <SliderContent>
                <Image src='assets/images/modern-hotel-high-resolution-logo-transparent.png'/>
            </SliderContent>
        </SliderBar>
    </Container>
    
  )
}

export default AdventureSection