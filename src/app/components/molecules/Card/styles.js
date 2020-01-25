import styled from "styled-components";

export const StyledCard = styled.div` 
    margin-bottom: ${props => props.margin}px;
`
export const StyledCardHeader = styled.div`
    p {
        margin-top: -${props => props.margin}px!important;
    }  
`
