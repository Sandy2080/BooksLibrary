import React from "react";
import { Text } from "../../atoms/text";
import { StyledCardHeader } from "./styles"

export const CardHeader = props => {
  const { title, isbn, fontSize, margin } = props
  return (<StyledCardHeader margin={margin}>
            <Text fontSize={fontSize} margin={margin} color="#333">{title}</Text>
            <Text.SMALL color="gray" className="card-subtitle mb-2">isbn: {isbn}</Text.SMALL>
          </StyledCardHeader>)
}

