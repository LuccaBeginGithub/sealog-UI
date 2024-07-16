import React from 'react'
import styled from 'styled-components'
import { CustomHeader } from '../Custom/CustomHeader';
import CustomContentCard from '../Custom/CustomContentCard';
import destination from '../../models/destination';
import  media  from '../../utilis/responsiveness';

const Container = styled.section``;
const CardGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  padding: 0rem 5rem 1.5rem 3.5rem;
  ${media.mobile`
    grid-template-columns:repeat(1,1fr);
  `
  }
  `;
const HeaderWrapper = styled.div`
  display:${props=>props.Header};
  margin-bottom:4.5rem;`;
const DestinationSection = (props) => {
 
  return (
    <Container>
        <HeaderWrapper Header = {props.Header}>
        <CustomHeader title={'Live anywhere'} description={'find your destination'}/>
        </HeaderWrapper>
        <CardGrid>
          {destination.map((data) => (<CustomContentCard key = {data.id} data = {data} setDestination={props.setDestination}/>))}
        </CardGrid>
    
    </Container>
  )
}

export default DestinationSection