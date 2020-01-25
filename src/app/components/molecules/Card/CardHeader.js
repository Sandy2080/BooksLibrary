import React from "react";
import { Text } from "../../atoms/text";
import { StyledCardHeader } from "./styles"

const Title = props => {
    const { margin, title, fontSize } = props
    return (<Text margin={margin} color="#333" fontSize={fontSize}>{title}</Text>)
}
const SubTitle = props => {
    const { subTitle } = props
    return (<Text.SMALL color="gray" classNames="card-subtitle mb-2">isbn: {subTitle}</Text.SMALL>)
}
export const CardHeader = props => {
    const { margin } = props
    return (<StyledCardHeader margin={margin} className="product-information">
                <Title {...props}/>
                <SubTitle  {...props}/>
            </StyledCardHeader>)
}

