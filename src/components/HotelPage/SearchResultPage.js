import React from 'react';
import styled from 'styled-components';
import product from '../../models/product';
import CustomSearchResultCard from '../Custom/CustomSearchResultCard';

const Conatiner = styled.div`
    padding: 6.5rem;`;

const InfoText = styled.h1`
font-size:3rem;
color:#265073;
margin-left:7rem;
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