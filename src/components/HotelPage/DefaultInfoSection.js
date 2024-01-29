import React from 'react';
import styled from 'styled-components';
import DestinationSection from '../HomePage/DestinationSection';
import CustomSimpleDisPlayCard from '../Custom/CustomSimpleDisPlayCard';
import media from '../../utilis/responsiveness';

const Conatiner = styled.div`
${media.mobile`
    padding-top:2rem;
   `}
    `;

const InfoText = styled.h1`
font-size:3rem;
color:#265073;
padding: 5.5rem 3rem 0 3rem;
${media.mobile`
    font-size:2rem;
   `}
`;
const CategoryImageWrapper = styled.div`
display:flex;
justify-content:space-between;
margin-left:2rem;
margin-right:2rem;
${media.mobile`
    flex-direction:column;
    justify-content:center;
    align-items:center;
   `}
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
        <InfoText  style={{color:'#219C90',marginLeft:'9rem',paddingTop:0}}>
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