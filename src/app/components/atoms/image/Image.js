import React from "react";
import classnames from "classnames";
import { StyledImage } from "./styles";

export const ProductImage = ({ cover, title, width, height, grid}) => {
    const classProps = classnames(grid);
    return (<div className={classProps}>
                <StyledImage src={cover} alt={title} width={width && width} height={height && height} />
            </div>)
}
        
