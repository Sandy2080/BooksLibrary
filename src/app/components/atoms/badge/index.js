import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { StyledBadge } from "./styles";
import { BadgeTheme, BadgeColor } from './types'

const Badge = props => {
    const {
        children,
        classNames,
        color,
        customColor,
        theme, 
    } = props;
    const classProps = classnames(color, theme, classNames);
    return (<StyledBadge customColor={customColor} className={`badge ${classProps}`} theme={theme}>{children}</StyledBadge>)
}
const { PRIMARY, SECONDARY, INFO, SUCCESS, WARNING, DANGER } = BadgeColor
const { DEFAULT } = BadgeTheme
Badge.PRIMARY = props => <Badge color={PRIMARY} {...props}></Badge>
Badge.SUCCESS = props => <Badge color={SUCCESS} {...props}></Badge>
Badge.WARNING = props => <Badge color={WARNING} {...props}></Badge>
Badge.INFO = props => <Badge color={INFO} {...props}></Badge>
Badge.DANGER = props => <Badge color={DANGER} {...props}></Badge>
Badge.SECONDARY = props => <Badge color={SECONDARY} {...props}></Badge>;

Badge.propTypes = {
    theme: PropTypes.string,
    color: PropTypes.string,
    classNames: PropTypes.string,
    customColor: PropTypes.string,
};
Badge.defaultProps = {
    theme: DEFAULT,
    color: SECONDARY,
};

export { BadgeTheme }
export default Badge