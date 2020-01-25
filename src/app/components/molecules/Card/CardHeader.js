import React from "react";
import { Text } from "../../atoms/text";
import { StyledCardHeader } from "./styles"

const Title = props => {
    const { fontSize, margin, color, title } = props
    return (<Text fontSize={fontSize} margin={margin} color="#333">{title}</Text>)
}
const SubTitle = props => {
    const { subTitle, classNames } = props
    return (<Text.SMALL color="gray" className="card-subtitle mb-2">isbn: {subTitle}</Text.SMALL>)
}
export const CardHeader = props => {
    const { margin } = props
    return (<StyledCardHeader margin={margin}>
                <Title title={props.title}/>
                <SubTitle  subTitle={props.subTitle}/>
            </StyledCardHeader>)
}

