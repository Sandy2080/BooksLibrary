import React from "react";
import classnames from "classnames";
import { StyledAlert } from "./styles";
import Button from "../../atoms/button";
import { AlertColor } from "./types"
import { Text } from "../../atoms/text";

const Alert  = props => {
    const {
    children,
    message,
    color, 
    classNames
    } = props;
    const classProps = classnames(color, classNames);
    return (<StyledAlert className={`alert ${classProps}`} role="alert">
                <Text.SEMIBOLD fontSize="20">{message}</Text.SEMIBOLD>
                {children}
            </StyledAlert>)
}

Alert.CONFIRM = props => {
    const { action } = props
    return (<Alert {...props} classNames="fade show">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <Button.LINK action={action.name}>{action.text}</Button.LINK>
    </ Alert>)
}

Alert.DISMISSIBLE = props => (
    <Alert {...props} classNames="alert-dismissible fade show">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </Alert>
)
export { AlertColor }
export default Alert;