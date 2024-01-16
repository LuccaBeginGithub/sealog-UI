import React from 'react';
import styled from 'styled-components';
import DestinationSection from '../HomePage/DestinationSection';
import CustomSimpleDisPlayCard from '../Custom/CustomSimpleDisPlayCard';

const Conatiner = styled.div`
    padding: 6.5rem;`;

const InfoText = styled.h1`
font-size:3rem;
color:#265073;
`;
const CategoryImageWrapper = styled.div`
display:flex;
justify-content:space-between;
`;

const categoryData = [{src:'assets/images/sheraton-villas.png',text:'hotel'},
{src:'assets/images/yacht.jpg',text:'yacht'},
{src:'assets/images/beachHouse.jpg',text:'house'},
{src:'assets/images/PearlBeachResort.jpg',text:'resort'}]

const DefaultInfoSection = ({setDestination,setCategory}) => {
  return (
    <Conatiner>
        <InfoText style={{marginTop:'4rem'}}>
            No idea where to go?
        </InfoText>
        <InfoText  style={{color:'#219C90',marginLeft:'9rem'}}>
            Favorite Destinations:
        </InfoText>
        <DestinationSection Header = 'none' setDestination={setDestination}/>
        <InfoText style={{marginTop:'4rem'}}>
           Browse by Categories:
        </InfoText>
        <CategoryImageWrapper>
            {categoryData.map(data=><CustomSimpleDisPlayCard src={data.src} alt={data.text} text={data.text}
                setCategory = {setCategory}
            />)}
            
        </CategoryImageWrapper>
    </Conatiner>
  )
}

export default DefaultInfoSection