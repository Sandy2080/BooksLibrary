import React from "react";
import { Text } from "../../atoms/text";
import { StyledCardHeader } from "./styles"

const Title = props => {
    const { margin, title } = props
    const { width } = useWindowDimensions();
    const isMobile = width < 640
    return (<Text fontSize={isMobile ? "12" : "18"} margin={margin} color="#333">{title}</Text>)
}
const SubTitle = props => {
    const { subTitle } = props
    return (<Text.SMALL color="gray" classNames="card-subtitle mb-2">isbn: {subTitle}</Text.SMALL>)
}
export const CardHeader = props => {
    const { margin } = props
    return (<StyledCardHeader margin={margin}>
                <Title {...props}/>
                <SubTitle  {...props}/>
            </StyledCardHeader>)
}

