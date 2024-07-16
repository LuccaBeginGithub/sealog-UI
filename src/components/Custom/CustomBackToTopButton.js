import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = styled.button`
  display: ${props => props.visible ? 'inline-block' : 'none'};
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: #E2DFD0;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 15%;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #686D76;

  }
`;

const CustomBackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopButton visible={isVisible} onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </ScrollToTopButton>
  );
};

export default CustomBackToTopButton;