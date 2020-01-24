import PropTypes from "prop-types";
import * as React from "react";
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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${id}`} aria-controls={id} aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id={id}>
                {children}
            </div>
        </StyledNavbar>
    );
}

Navbar.propTypes = {
    id: PropTypes.string,
    theme: PropTypes.string,
    color: PropTypes.string,
    placement: PropTypes.string,
};

Navbar.LIGHT = (props) => {
    return (
        <Navbar
            theme={NavbarTheme.LIGHT}
            color={NavbarColor.BG_LIGHT}
            {...props}
        ></Navbar>
    );
}

Navbar.DARK = (props) => {
    return (
        <Navbar
            theme={NavbarTheme.DARK}
            color={NavbarColor.BG_DARK}
            {...props}
        ></Navbar>
    );
}
export {
    NavbarColor, 
    NavbarTheme, 
    NavbarPlacement 
}
export default Navbar;