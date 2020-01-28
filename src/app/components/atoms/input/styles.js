import styled from 'styled-components';
import { InputTheme } from './types';
const { RADIUS, ROUNDED } = InputTheme;

export const StyledInput = styled.input`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => {
    switch (props.theme) {
      case RADIUS:
        return '20px';
      case ROUNDED:
        return '30px';
      default:
        return;
    }
  }};
`;
