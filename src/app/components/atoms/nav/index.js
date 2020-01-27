import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavbarColor, NavbarTheme, NavbarPlacement } from "./types";
import { StyledNavbar } from "./styles"

const Navbar = props => { 
    const {
        children, 
        id, 
        theme, 
        color, 
        placement, 
        customColor, 
        margin
    } = props;
    const classProps = classnames(theme, color, placement);
    return (
        <StyledNavbar 
            margin={margin}
            className={`navbar navbar-expand-lg ${classProps}`}
            customColor={customColor}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${id}`} aria-controls={id} aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id={id}>
                {children}
            </div>
        </StyledNavbar>);
}
const { BG_DARK, BG_LIGHT} = NavbarColor
const { DARK, LIGHT} = NavbarTheme
Navbar.LIGHT = (props) => {
    return (
        <Navbar
            theme={LIGHT}
            color={BG_LIGHT}
            {...props}
        ></Navbar>
    );
}
Navbar.DARK = (props) => {
    return (
        <Navbar
            theme={DARK}
            color={BG_DARK}
            {...props}
        ></Navbar>
    );
}
Navbar.propTypes = {
    id: PropTypes.string,
    theme: PropTypes.string,
    color: PropTypes.string,
    placement: PropTypes.string,
};

export {
    NavbarColor, 
    NavbarTheme, 
    NavbarPlacement 
}
export default Navbar;