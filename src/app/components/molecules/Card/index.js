import React from "react";
import { CardHeader } from './CardHeader'
import { CardBody } from "./CardBody";
import { StyledCard } from './styles'

const Card = ({ children }) => (
    <StyledCard className="card" margin="20">
        <div className="card-body">
            <div className="row">
                {children}
            </div>
        </div>
    </StyledCard>
)
export {
    CardHeader,
    CardBody
}
export default Card;
