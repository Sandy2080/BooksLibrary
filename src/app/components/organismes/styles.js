import styled from "styled-components";

export const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     .add-cart-button {
        float: right;
    }
    @media screen and (max-width: 640px) {
        div:first-child {
            margin-bottom: 40px;
        }
        h5, h6 {
            text-align: center;
        }
    }
`

