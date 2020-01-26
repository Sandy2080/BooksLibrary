import styled from "styled-components";

export const StyledProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .add-cart-button {
        float: right;
    }
    @media screen and (min-width: 1024px) {
        .add-cart-button {
            position: absolute;
            opacity: 0;
            bottom: -20px;
            right: 20px;
            transition: all 0.5s;
        }
        .add-cart-button.visible {
            opacity: 1;
            bottom: 0px;
        }
    }
    @media screen and (max-width: 768px) {
        div:first-child {
            margin: 10px 0;
            text-align: center;
        }
        h5, h6, .content {
            text-align: center;
        }
    }
`

