import React from "react";
import { StyledContainer } from "./styles"

const Container = ({ children, col, margin }) => (
    <StyledContainer className="container" margin={margin}>
        <div className="row">
            <div className={col}>
                {children}
            </div>
        </div>
    </StyledContainer>
)
export default Container;