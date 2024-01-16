import React from 'react';
import { CustomHeader } from '../components/Custom/CustomHeader';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import CustomBookingCard from '../components/Custom/CustomBookingCard';
import { useAuth } from '../context/AuthContext';

const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    font-size:3rem;
    margin-left:1.5rem;
    padding-top:3.5rem;
    color:#2D9596;
`;
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const ImageWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  row-gap:2.7rem;
  padding: 2.5rem 5.5rem 0rem 5.5rem;
  `;

const ProfilePage = () => {
    const {userInfo} = useAuth();
    // const userInfo = {
    //     firstName:'Lia',
    //     lastName:'Kim',
    //     bookings:[
    //         {
    //             name:'Sheraton Denarau Villas',
    //             checkInDate:'2024-1-15',
    //             checkOutDate:'2024-1-16',
    //             roomCount:2
    //         },
    //         {
    //             name:'Sheraton Denarau Villas',
    //             checkInDate:'2024-1-15',
    //             checkOutDate:'2024-1-16',
    //             roomCount:2
    //         },
    //         {
    //             name:'Sheraton Denarau Villas',
    //             checkInDate:'2024-1-15',
    //             checkOutDate:'2024-1-16',
    //             roomCount:2
    //         },
    //         {
    //             name:'Sheraton Denarau Villas',
    //             checkInDate:'2024-1-15',
    //             checkOutDate:'2024-1-16',
    //             roomCount:2
    //         },
    //         {
    //             name:'Sheraton Denarau Villas',
    //             checkInDate:'2024-1-15',
    //             checkOutDate:'2024-1-16',
    //             roomCount:2
    //         },
    //         {
    //             name:'Sheraton Denarau Villas',
    //             checkInDate:'2024-1-15',
    //             checkOutDate:'2024-1-16',
    //             roomCount:2
    //         },

    //     ]
    // } 

    let content;
    if (userInfo.bookings.length ===1){
        content = <Container>
            <CustomHeader
                title={'You have no booking yet.'}
            />
            <StyledNavLink to={'/stays'}>explore more</StyledNavLink>
        </Container>
    }else{
        content = <Container style={{flexDirection:'column'}}>
            <CustomHeader
                title={'Your Bookings:'}
            />
            <ImageWrapper>
                {userInfo.bookings.slice(1).map((data,index) => <CustomBookingCard data = {data} key={index}/>)}
            </ImageWrapper>
        </Container>
    }

  return (
    <setction>
    <CustomHeader title={`Welcome back, ${userInfo.firstName}!`}/>
    {content}
    {/* <div>
          <h2>Person Details:</h2>
          <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        </div> */}
    </setction>
  )
}

export default ProfilePage