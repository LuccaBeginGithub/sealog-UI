import { css } from "styled-components";

const sizes = {
    mobile:620,};

export const mobile = (props) => {
    return css`
    @media only screen and (max-width : ${sizes.mobile}px ) {
        ${props}
    }
    `;
};