import React from 'react';
import styled from 'styled-components';
import product from '../../models/product';
import CustomSearchResultCard from '../Custom/CustomSearchResultCard';
import media from '../../utilis/responsiveness';

const Conatiner = styled.div`
    padding: 6.5rem;
    ${media.mobile`
    padding-left:1rem;
    padding-right:1rem;`}`;

const InfoText = styled.h1`
font-size:3rem;
color:#265073;
margin-left:7rem;
${media.mobile`
    font-size:2rem;
    margin-left:0.5rem;`}
`;

const SearchResultContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;`;

const SearchResultPage = ({category,destination,location}) => {
    let filteredproduct;
    let searchTitle;
    if (category){
        filteredproduct = product.filter(data => data.category === category)
        searchTitle = `${category} : ${filteredproduct.length} properties found: `;
    }

    if (destination){
        filteredproduct = product.filter(data => data.location === destination)
        searchTitle = `${destination} : ${filteredproduct.length} properties found: `;
    }
    if (location){
        filteredproduct = product.filter(data => data.location === location)
        searchTitle = `${location} : ${filteredproduct.length} properties found: `;
    }
    

  return (
    <Conatiner>
        <InfoText style={{marginTop:'4rem'}}>
           {searchTitle}
        </InfoText>
        <SearchResultContainer>
            {filteredproduct.map(item=><CustomSearchResultCard 
                item = {item}
                />)}
        </SearchResultContainer>
    </Conatiner>
  )
}

export default SearchResultPage