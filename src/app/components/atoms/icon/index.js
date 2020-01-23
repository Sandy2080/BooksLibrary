import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { IconSize, IconType } from './types' 
import { StyledIcon } from "./styles";

const Icon = (props) => {
    const { color, size, type, classNames} = props
    const classProps = classnames(size, type, classNames);
    return (
      <StyledIcon color={color}>
        <i className={`fas ${classProps}`}></i>
      </StyledIcon>
    );
}

Icon.SHOPPING_BAG = (props) => { 
    const { size } = props
    return(<Icon type={IconType.SHOPPING_BAG} size={size}></Icon>)
}
Icon.CHEVRON_RIGTH = props => {
  const { size } = props;
  return <Icon type={IconType.CHEVRON_RIGTH} size={size}></Icon>;
};
Icon.CHEVRON_LEFT = props => {
  const { size } = props;
  return <Icon type={IconType.CHEVRON_LEFT} size={size}></Icon>;
};
Icon.TRASH = props => {
  const { size } = props;
  return <Icon type={IconType.TRASH} size={size}></Icon>;
}

Icon.propTypes = {
  color: PropTypes.string, 
  type: PropTypes.string.isRequired, 
  size: IconSize.isRequired
};

Icon.defaultProps = {   
  type: IconType.DEFAULT,
  size: IconSize.LARGE, 
};
export {
    IconSize, 
    IconType
}
export default Icon;