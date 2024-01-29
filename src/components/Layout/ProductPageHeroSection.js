import React from 'react';
import styled from 'styled-components';
import media from '../../utilis/responsiveness';


const Image = styled.img`
    width:100%;
    height:380px;
    object-fit:cover;
    margin-top:-2rem;
    ${media.mobile`
      height:23rem;`}
`;
const InfoText = styled.h1`
  font-size:4rem;
  color:${props => props.color || '#265073'};
  ${media.mobile`
      font-size:2.5rem;`}
 `;

const InfoTextWrapper = styled.div`
width:50%;
position:absolute;
padding-left:6rem;
${media.mobile`
      width:80%;
      padding-left:2rem;`}
`;

const InfoTextSub = styled.h2`
  font-size:2.5rem;
  font-weight:normal;
  color:${props => props.color || '#265073'};
  ${media.mobile`
      font-size:1.5rem;`}
  `;

const ProductPageHeroSection = ({src,title,subtitle,color}) => {
  return (
    <div>
    <InfoTextWrapper>
    <InfoText color={color}>
      {title}
    </InfoText>
    <InfoTextSub color={color}>
     {subtitle}
    </InfoTextSub>
    </InfoTextWrapper>
    <Image src = {src}/>
    </div>
  )
}

export default ProductPageHeroSection