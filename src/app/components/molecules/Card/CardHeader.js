import React from "react";
import { Text } from "../../atoms/text";
import { StyledCardHeader } from "./styles"

const Title = props => {
    const { margin, title, titleFontSize } = props
    return (<Text margin={margin} color="#333" fontSize={titleFontSize}>{title}</Text>)
}
const SubTitle = props => {
    const { subTitle, subTitleFontSize } = props
    return (<Text.SMALL color="gray" classNames="card-subtitle mb-2" fontSize={subTitleFontSize}>isbn: {subTitle}</Text.SMALL>)
}
export const CardHeader = props => {
    const { margin } = props
    return (<StyledCardHeader margin={margin}>
                <Title {...props}/>
                <SubTitle  {...props}/>
            </StyledCardHeader>)
}

