import React from 'react';
import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import media from '../../utilis/responsiveness';

const InputWrapper = styled.div`
    position: absolute;
    display: flex;
    margin-top:3rem;
    align-items:center;`;
const InputBox = styled.input`
    width:100%;
    max-width: 30rem;
    min-width:26rem;
    height:3.4rem;
    border-radius: 1.8rem;
    border: 1.5px solid gray;
    padding-left: 2rem;
    color: gray;
    outline:none;
    ${
        media.mobile`
        width:26rem;
    `}
    `;
const IconWarpper = styled.div`
    position:relative;
    right: 3.8rem;
    :hover{
        cursor: pointer;
    }
    `;
const CustomInput = () => {
  return (
    <InputWrapper>
                <InputBox placeholder='Enter your email' />
                <IconWarpper>
                   <ArrowCircleRightIcon style={{color:'#3081D0',fontSize:'36px'}} />
                </IconWarpper>
    </InputWrapper>
  )
}

export default CustomInput