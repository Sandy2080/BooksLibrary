import styled from "styled-components";

export const StyledCard = styled.div` 
    margin-bottom: ${props => props.margin}px;
`
export const StyledCardHeader = styled.div`
    .product-information {
        width: 80%;
        margin: 0 auto!important; 
    }
    .price-badge {
        margin: 10px 0;
    }
    p {
       margin-top: -5px;
    }
    @media screen and (max-width: 375px) {
        padding: 0 10px;
        .product-information {
        p {
          margin-botttom: 5px!important;
        }
        }
    }
`
