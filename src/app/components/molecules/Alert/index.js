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
    secondary,
    color, 
    classNames
    } = props;
    const classProps = classnames(color, classNames);
    return (<StyledAlert className={`alert ${classProps}`} role="alert">
                <Text.SEMIBOLD fontSize="20">{message}</Text.SEMIBOLD>
                {secondary && <Text.SMALL>{secondary}</Text.SMALL>}
                {children}
            </StyledAlert>)
}

Alert.CONFIRM = props => {
    const { action, secondary } = props
    return (<Alert {...props} classNames="fade show">
                <Button.INFO action={action.name}>{action.text}</Button.INFO>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
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