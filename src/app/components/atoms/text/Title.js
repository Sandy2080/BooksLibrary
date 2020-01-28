import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { StyledTitle } from './styles';

export const Title = props => {
  const { children, fontWeight, color, classNames } = props;
  const classProps = classnames(classNames);
  return (
    <StyledTitle className={classProps} fontWeight={fontWeight} color={color}>
      {children}
    </StyledTitle>
  );
};

Title.SEMIBOLD = props => (
  <StyledTitle fontWeight="600" {...props}>
    {props.children}
  </StyledTitle>
);
Title.BOLD = props => (
  <StyledTitle fontWeight="700" {...props}>
    {props.children}
  </StyledTitle>
);
Title.SUPERBOLD = props => (
  <StyledTitle fontWeight="800" {...props}>
    {props.children}
  </StyledTitle>
);
Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};
Text.defaultProps = {
  color: '#6c757d',
  fontSize: '14',
  fontWeight: '400',
};
