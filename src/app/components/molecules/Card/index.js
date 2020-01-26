import React from "react";
import { CardHeader, PriceLabel } from './CardHeader'
import { StyledCard } from './styles'

const Card = ({ children }) => (
    <StyledCard margin="20" className="card card-body">
        <div className="row">
            {children}
        </div>
    </StyledCard>
)
export { CardHeader, PriceLabel }
export default Card;
