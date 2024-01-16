import React from 'react';
import styled from 'styled-components';
import { CustomHeader } from '../Custom/CustomHeader';

const Container = styled.div`
    margin:2.5rem;`;

const InfoSection = (props) => {
  return (
    <Container>
        <CustomHeader title={props.title} />
        
    </Container>
  )
}

export default InfoSection