import { css } from "styled-components";

const sizes = {
    xs:'520px',
    s:'825px',
    m:'1025px',

};

const media = {
    mobile: (...args) => css`
    @media (max-width: ${sizes.xs}){
        ${css(...args)}
    }
    `,
    ipad: (...args) => css`
    @media (max-width:${sizes.m}){
        ${css(...args)}
    }`
    ,
    ipadAir:(...args) => css`
    @media (max-width:${sizes.s}){
        ${css(...args)}
    }`
    ,
}

export default media;
;