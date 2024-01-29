import React from 'react';
import styled from 'styled-components';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import RoomServiceRoundedIcon from '@mui/icons-material/RoomServiceRounded';
import NightlifeRoundedIcon from '@mui/icons-material/NightlifeRounded';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import media from '../../utilis/responsiveness';

const Container = styled.section`
    margin-top:5.5rem;
    ${media.mobile`
    margin-top:0;`}
    `;
const Title = styled.h2`
    font-size:2.4rem;
    ${media.mobile`
    font-size:1.4rem;
    margin-top:0;`}
`;
const AmenitiesWrapper = styled.div`
    display:flex;
    `;
const Column1 = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;

    `;
const Column2 = styled.div`
flex:1.2;
display:flex;
flex-direction:column;
padding-left:4.5rem;

`;
const VerticalLine = styled.div`
    width:1px;
    background-color:gray;
`;
const Item = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;


 `;
const AmenitiesText = styled.p`
    font-size:1.5rem;
    color:gray;
    margin-left:2rem;
    ${media.mobile`
    font-size:1.2rem;
    margin-top:0;`}
    `;

const AmenitiesSection = () => {
  return (
    <Container style={{marginTop:'5.5rem'}}>
            <Title>
                Amenities
            </Title>
            <AmenitiesWrapper>
                <Column1>
                    <Item>
                        <WifiRoundedIcon color='action'/>
                        <AmenitiesText>
                            Free wifi
                        </AmenitiesText>
                    </Item>
                    <Item>
                        <PoolRoundedIcon color='action'/>
                        <AmenitiesText>
                            Swimming pools
                        </AmenitiesText>
                    </Item>
                    <Item>
                        <RoomServiceRoundedIcon color='action'/>
                        <AmenitiesText>
                           Room Service
                        </AmenitiesText>
                    </Item>
                    <Item>
                        <NightlifeRoundedIcon color='action'/>
                        <AmenitiesText>
                          Bar
                        </AmenitiesText>
                    </Item>
                    
                </Column1>
                <VerticalLine/>
                <Column2>
                    <Item>
                        <LocalParkingOutlinedIcon color='action'/>
                        <AmenitiesText>
                          Free parking
                        </AmenitiesText>
                    </Item>
                    <Item>
                        <FitnessCenterOutlinedIcon color='action'/>
                        <AmenitiesText>
                          Free gym
                        </AmenitiesText>
                    </Item>
                    <Item>
                        <ContactPhoneOutlinedIcon color='action'/>
                        <AmenitiesText>
                          24-hour frontdesk
                        </AmenitiesText>
                    </Item>
                    <Item>
                        <AcUnitOutlinedIcon color='action'/>
                        <AmenitiesText>
                          Air conditioning
                        </AmenitiesText>
                    </Item>
                </Column2>
            </AmenitiesWrapper>
        </Container>
  )
}

export default AmenitiesSection