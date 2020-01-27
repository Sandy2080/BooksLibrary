import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { StyledText } from './styles'

export const Text = props => {
    const {
        children,
        fontSize,
        fontWeight,
        margin,
        classNames, 
        color,
    } = props
    const classProps = classnames(classNames);
    return (<StyledText
            margin={margin}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            className={classProps}>
                {children}
            </StyledText>)
}
Text.NORMAL = props => <StyledText fontWeight="400" {...props}>{props.children}</StyledText >;
Text.SEMIBOLD = props => <StyledText fontWeight="600" {...props}>{props.children}</StyledText >;
Text.BOLD = props => <StyledText fontWeight="700" {...props}>{props.children}</StyledText >;
Text.SUPERBOLD = props => <StyledText fontWeight="800" {...props}>{props.children}</StyledText >;
Text.SMALL = props => (<StyledText {...props}>{props.children}</StyledText>);
Text.MUTED = props => <StyledText fontSize="11" className="text-muted" {...props}>{props.children}</StyledText >;

Text.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    margin: PropTypes.string,
};
Text.defaultProps = {
    color: "#6c757d", 
    fontSize: '14',
    fontWeight: '400',
    margin: '0'
};




