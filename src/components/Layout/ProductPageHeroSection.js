import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../utilis/responsiveness';


const Image = styled.img`
    width:100%;
    height:380px;
    object-fit:cover;
    margin-top:-2rem;
    ${mobile({width:'120px',
    height:'42px',})}
`;
const InfoText = styled.h1`
  font-size:4rem;
  color:${props => props.color || '#265073'};
 `;

const InfoTextWrapper = styled.div`
width:50%;
position:absolute;
padding-left:6rem;`


const ProductPageHeroSection = ({src,title,subtitle,color}) => {
  return (
    <div>
    <InfoTextWrapper>
    <InfoText color={color}>
      {title}
    </InfoText>
    <InfoText color={color} style={{fontSize:'2.5rem',fontWeight:'normal'}}>
     {subtitle}
    </InfoText>
    </InfoTextWrapper>
    <Image src = {src}/>
    </div>
  )
}

export default ProductPageHeroSection