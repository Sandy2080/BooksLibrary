import styled from "styled-components";

export const Text = styled.p`
    font-size: 16px;
`;

export const StyledTextSmall = styled(Text)`
  font-size: 11px;
`;

export const StyledTextBold = styled(Text)`
  font-weight: 700;
`;
export const Title = styled.h5`
    margin-bottom: 0.75rem;
`;

export const TitleBold = styled(Title)`
    margin-bottom: 0.75rem;
    font-weight: 700;
`;

export const SubTitle = styled.h6`
    color: #6c757d !important;
`;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const StyledButton = styled.button`
    background: ${props => props.color} !important;
    color: white;
    &: hover {
    color: white;
    }
`;

export const StyledDivider = styled.div`
    width: inherit;
    margin-bottom: 10px;
    float: none;    
    height: ${props => (props.thickness ? `${props.thickness}px` : "1px")};
    background: #eee;
`;

export const StyledDividerDark = styled(StyledDivider)`
    background: #333;
`;
