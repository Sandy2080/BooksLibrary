import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { InputSize, InputTheme } from "./types";
import { StyledInput } from "./styles"

const Input = props => {
    const {
        action,
        border,
        classNames,
        size,
        theme,
        type, 
        placeholder,
        aria,
        defaultValue,
        max,
        min,
    } = props;
    const classProps = classnames(size, classNames);
    return (
        <StyledInput
            onChange={action}
            className={`form-control ${classProps}`}
            type={type}
            theme={theme}
            placeholder={placeholder}
            aria-label={aria}
            defaultValue={defaultValue}
            max={max}
            border={border}>
        </StyledInput>
    );
};

Input.propTypes = {
    border: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
    disabled: false,
    theme: InputTheme.DEFAULT,
    onChange: () => { }
};

Input.SMALL = (props) => {
    return (
        <Input
            size={InputSize.SMALL}
            {...props}
        ></Input>
    );
}
Input.LARGE = (props) => {
    return (
        <Input
            size={InputSize.LARGE}
            {...props}
        ></Input>
    );
}
Input.STEPPER = props => {
    return(
        <Input
            name="size"
            type="number"
            {...props}
            >
        </Input>
    )
}

export {
   InputTheme, 
   InputSize
}
export default Input;
