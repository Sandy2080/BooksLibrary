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

Alert.DISMISSIBLE = props => {
    const { action, dismissAction} = props
    return (<Alert {...props} classNames="fade show">
                <Button.INFO action={action.name}>{action.text}</Button.INFO>
                <Button.DISMISSIBLE action={dismissAction}/>
            </ Alert>)
}

Alert.CONFIRM = props => {
    return (<Alert {...props} classNames="alert-dismissible fade show"></Alert>)
}

export { AlertColor }
export default Alert;