import React from "react";
import { isMobile } from '../../../utils/hooks/useWindowDimensions';
import { Text } from "../../atoms/text";
import Badge from "../../atoms/button"
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
    const { margin, badge } = props
    return (<StyledCardHeader margin={margin}>
                <div className="row">
                    {badge != null && !isMobile && 
                        <div className="col-sm-1">
                            <Badge.INFO><Text.SEMIBOLD fontSize="20" className="price-badge">€{badge}</Text.SEMIBOLD></Badge.INFO>
                        </div>}
                    <div className="col-sm">
                        <Title {...props} />
                        <SubTitle  {...props} />
                    </div>
                </div>
            </StyledCardHeader>)
}

