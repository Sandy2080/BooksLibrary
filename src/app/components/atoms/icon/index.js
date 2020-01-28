import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { IconSize, IconType } from './types';
import { StyledIcon } from './styles';

const Icon = props => {
  const { color, size, type, classNames } = props;
  const classProps = classnames(size, type, classNames);
  return (
    <StyledIcon color={color}>
      <i className={`fas ${classProps}`}></i>
    </StyledIcon>
  );
};
const { SHOPPING_BAG, CHEVRON_LEFT, CHEVRON_RIGHT, TRASH } = IconType;

Icon.SHOPPING_BAG = props => <Icon type={SHOPPING_BAG} {...props}></Icon>;
Icon.CHEVRON_RIGHT = props => <Icon type={CHEVRON_RIGHT} {...props}></Icon>;
Icon.CHEVRON_LEFT = props => <Icon type={CHEVRON_LEFT} {...props}></Icon>;
Icon.TRASH = props => <Icon type={TRASH} {...props}></Icon>;

Icon.propTypes = {
  color: PropTypes.string,
  classNames: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
Icon.defaultProps = {
  type: IconType.DEFAULT,
  size: IconSize.LARGE,
};
export { IconSize, IconType };
export default Icon;
