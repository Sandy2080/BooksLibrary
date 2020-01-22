import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { ButtonColor, ButtonSize, ButtonType, ButtonTheme } from "./types";
import { StyledButton } from "./styles";

const Button = props => {
  const {
    action,
    children,
    disabled,
    classNames,
    color,
    size,
    customColor
  } = props;
  const classProps = classnames(color, size, classNames);
  return (
    <StyledButton
      onClick={action}
      disabled={disabled}
      className={`btn ${classProps}`}
      customColor={customColor}
      size={size}
      customColor={customColor}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string,
  color: PropTypes.string,
  customColor: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  onClick: () => {},
  disabled: false
};

Button.PRIMARY = (props) => {
    return (
      <Button
        type={ButtonType.BUTTON}
        color={ButtonColor.PRIMARY}
        {...props}
      ></Button>
    );
}
Button.INFO = props => {
  return (
    <Button
      type={ButtonType.BUTTON}
      color={ButtonColor.INFO}
      {...props}
    ></Button>
  );
};

Button.SUCCESS = props => {
  return (
    <Button
      type={ButtonType.BUTTON}
      color={ButtonColor.SUCCESS}
      {...props}
    ></Button>
  );
};
Button.WARNING = props => {
  return (
    <Button
      type={ButtonType.BUTTON}
      color={ButtonColor.WARNING}
      {...props}
    ></Button>
  );
};

Button.PRIMARY.SM = props =>  <Button.PRIMARY size={ButtonSize.SMALL} {...props}></Button.PRIMARY>
Button.PRIMARY.LG = props => <Button.PRIMARY size={ButtonSize.LARGE} {...props}></Button.PRIMARY>

Button.INFO.SM = props => <Button.INFO size={ButtonSize.SMALL} {...props}></Button.INFO>
Button.INFO.LG = props =><Button.INFO size={ButtonSize.LARGE} {...props}></Button.INFO>

Button.WARNING.SM = props => <Button.WARNING size={ButtonSize.SMALL} {...props}></Button.WARNING>
Button.WARNING.LG = props => <Button.WARNING size={ButtonSize.LARGE} {...props}></Button.WARNING>

Button.SUCCESS.SM = props => <Button.SUCCESS size={ButtonSize.SMALL} {...props}></Button.SUCCESS>
Button.SUCCESS.LG = props => <Button.SUCCESS size={ButtonSize.LARGE} {...props}></Button.SUCCESS>
export default Button;