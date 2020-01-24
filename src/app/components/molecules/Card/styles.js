import styled from "styled-components";

export const StyledCard = styled.div` 
    margin-bottom: ${props => props.margin}px;
    .row {
        margin-bottom: 0!important;
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