import React from "react";
import { StyledImage } from "./styles";

export const ProductImage = ({ item, width, height}) => (<StyledImage src={item.cover} alt={item.title} width={width && width} height={height && height}/>);