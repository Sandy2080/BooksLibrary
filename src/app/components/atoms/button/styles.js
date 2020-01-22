import styled from "styled-components";

export const StyledButton = styled.button`
    background: ${props => props.customColor && props.customColor}!important;
    border-color: ${props => props.customColor && props.customColor}!important;
    color: white;
    &:hover {
    color: white;
    }
`;
