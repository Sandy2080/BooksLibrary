import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { StyledSubtitle } from './styles'

export const SubTitle = props => {
    const {
        children,
        color, 
        classNames, 
        margin
    } = props
    const classProps = classnames(classNames);
    return (<StyledSubtitle margin={margin} className={classProps} color={color}>{children}</StyledSubtitle >)
}
SubTitle.propTypes = {
    color: PropTypes.string,
};
SubTitle.defaultProps = {
    color: "#333"
};
