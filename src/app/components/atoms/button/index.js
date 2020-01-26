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
    customColor, 
    theme, 
    outline
  } = props;
  const btnColor = outline ? `btn-outline-${color}` : `btn-${color}`
  const classProps = classnames(btnColor, size, classNames);
  return (
    <StyledButton
      onClick={action}
      disabled={disabled}
      className={`btn ${classProps}`}
      customColor={customColor}
      size={size}
      customColor={customColor}
      theme={theme}>
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
  disabled: false,
  theme: ButtonTheme.DEFAULT,
  onClick: () => { }
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
Button.LIGHT = (props) => {
  return (
    <Button
      type={ButtonType.BUTTON}
      color={ButtonColor.LIGHT}
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

Button.DANGER = props => {
  return (
    <Button
      type={ButtonType.BUTTON}
      color={ButtonColor.DANGER}
      {...props}
    ></Button>
  );
};

Button.LINK = props => {
  return (<Button classNames="link" {...props}></Button>);
};

Button.DISMISSIBLE = props => {
  return (<Button type="button" classNames="close" data-dismiss="alert" aria-label="Close" {...props}>
            <span aria-hidden="true">&times;</span>
          </Button>)
}

export {
  ButtonSize, 
  ButtonTheme
}
export default Button;
