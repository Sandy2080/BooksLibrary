import React from "react";
import Alert, { AlertColor } from "../../molecules/Alert"
import { cartStatus } from "../../../lib/reducers/shoppingCart"
const { COMPLETE, APPROVED } = cartStatus

const StatusAlert = props => {
    const { status, approveConfirmOrder, cancelCheckout } = props
    if (status === COMPLETE) {
        return (<Alert.DISMISSIBLE
            color={AlertColor.INFO}
            message="Do you wish to confirm your order ?"
            action={{ name: approveConfirmOrder, text: "confirm order" }}
            dismissAction={cancelCheckout} />)
    }
    if (status === APPROVED) {
        return (<Alert.CONFIRM
            color={AlertColor.SUCCESS}
            message="Thank you for your order"
            secondary="You will be redirected to the Homepage is a few seconds ..." />)
    }
    return (<span></span>)
}
export default StatusAlert;