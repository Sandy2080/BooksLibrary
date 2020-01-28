import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin-bottom: ${props => props.margin}px;
`;
export const StyledTitle = styled.h1`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;
export const StyledSubtitle = styled.h2`
  margin-bottom: ${props => props.margin}px!important;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;
