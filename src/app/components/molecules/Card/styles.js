import styled from "styled-components";

export const StyledCard = styled.div` 
    margin-bottom: ${props => props.margin}px;
    position: relative;
   @media screen and (max-width: 375px) { 
      .price-button {
         position: absolute;
         top: 30px;
         right: 25px;
         z-index: 1;
      }
   }
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
      .row {
         margin: 0 
      } 
      p {
         margin-botttom: 5px!important;
      }
    }
`
