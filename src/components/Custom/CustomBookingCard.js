import React from 'react';
import styled from 'styled-components';
import product from '../../models/product';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';

const Container = styled.div`
    width: 31rem;
    background-color: #F3F3F3;
    border-radius: 1.2rem;
    overflow: hidden;
    height: 37rem;
    margin-left:3.5rem;
    `;

const Image = styled.img`
    width:31rem;
    height:22rem;
    object-fit:cover;`;

const ProductName = styled.p`
    font-size:1.7rem;
    font-weight:bold;
    margin: 0.2rem;
    text-align:center;
    `;
const DateWrapper = styled.div`
    display:flex;
    font-size:1.5rem;
    color:gray;
    padding:0 1.2rem 0 1.2rem;
    align-items:center;
    `;
const DateText = styled.p`
    margin-right:0.5rem;
`;
const CustomBookingCard = ({data}) => {
    const{name,checkInDate,checkOutDate,roomCount} = data;
    const hotel = product.filter(hotel=>hotel.name ===data.name)[0];
    const src = hotel.src;
  return (
    <Container>
        <Image src = {src} />
        <ProductName>
            {name}
        </ProductName>
        <DateWrapper>
            <CalendarMonthIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
            <DateText>
                From 
            </DateText>
            <DateText style={{color:'black',fontWeight:'bold'}}>
                {checkInDate}
            </DateText>
            <DateText>
                to
            </DateText>
            <DateText style={{color:'black',fontWeight:'bold'}}>
                {checkOutDate}
            </DateText>
        </DateWrapper>
        <DateWrapper>
            <BedIcon color='action' style={{marginRight:'1rem',fontSize:'2.2rem'}}/>
            <DateText >
                {roomCount} rooms
            </DateText>
        </DateWrapper>
        
    </Container>
  )
}

export default CustomBookingCard