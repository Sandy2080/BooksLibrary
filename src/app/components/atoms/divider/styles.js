import styled from "styled-components";
export const StyledDivider = styled.div`
    width: inherit;
    margin: 10px 0 20px 0;
    float: none;    
    height: ${props => (props.thickness ? `${props.thickness}px` : "1px")};
    margin-top: ${props => (props.spacing ? `${props.spacing }px` : "")};
    background: #eee;
`;
export const StyledDividerDark = styled(StyledDivider)`
    background: #333;
`;