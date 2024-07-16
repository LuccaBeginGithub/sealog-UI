import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import product from '../models/product';
import CustomSearchResultCard from '../components/Custom/CustomSearchResultCard';
import CustomBackToTopButton from '../components/Custom/CustomBackToTopButton';
import media from '../utilis/responsiveness';
import { CustomButton } from '../components/Custom/CustomButton';

const Conatiner = styled.div`
    padding: 2rem 6.5rem;
    ${media.mobile`
    padding-left:1rem;
    padding-right:1rem;`}`;

const InfoText = styled.h1`
font-size:3rem;
color:#265073;
margin-left:7rem;
margin-top:2rem;
${media.mobile`
    font-size:2rem;
    margin-left:0.5rem;`}
`;

const SearchResultContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;`;

const SearchResultPage = () => {
    const [searchParams] = useSearchParams();
    const [cardsToShow, setCardsToShow] = useState(5); 
    const destination = searchParams.get('destination');
    const category = searchParams.get('category');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
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
    if (category === 'all' && destination === 'all'){
        filteredproduct = product;
        searchTitle = `${filteredproduct.length} properties found: `;
    }

    if(filteredproduct.length === 0){
        searchTitle = `No properties are provided yet.`;
        
    }
    const [cards, setCards] = useState(filteredproduct.slice(0, 5));
    
    useEffect(() => {
        setCards(filteredproduct.slice(0,cardsToShow));
    },[cardsToShow,filteredproduct]);

    const loadMore = () => {
    setCardsToShow(prev => prev + 5); 
  };

   
    

  return (
    <Conatiner >
        <InfoText >
           {searchTitle}
        </InfoText>
        <SearchResultContainer>
            {cards.map(item=><CustomSearchResultCard 
                item = {item}
                />)}
            {cardsToShow < filteredproduct.length &&
                <CustomButton title={"Load More"} onClick = {loadMore}/>}
        </SearchResultContainer>
        <CustomBackToTopButton/>
    </Conatiner>
  )
}

export default SearchResultPage