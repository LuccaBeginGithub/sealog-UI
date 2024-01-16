import React from 'react';
import styled from 'styled-components';
import todo from '../models/todo';
import ProductPageHeroSection from '../components/Layout/ProductPageHeroSection';
import CustomActivityCard from '../components/Custom/CustomActivityCard';
const ImageWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  row-gap:2.7rem;
  padding: 2.5rem 0.5rem 0rem 5.5rem;
  `;

const TodoPage = () => {
  return (
    <div>
        <ProductPageHeroSection
            src = {'assets/images/activitypagehero.jpg'}
            title = {'Water Sports Bliss for Enthusiasts'}
            subtitle={'Sail, Surf, and Dive: Your Ultimate Water Sports Haven'}
            color = {'#FBEEAC'}
            />

        <ImageWrapper>
            {todo.map(data => <CustomActivityCard data = {data} key={data.name}/>)}
            {todo.map(data => <CustomActivityCard data = {data} key={`${data.name}(1)`}/>)}
            {todo.map(data => <CustomActivityCard data = {data} key={`${data.name}(2)`}/>)}

        </ImageWrapper>

    </div>
  )
}

export default TodoPage