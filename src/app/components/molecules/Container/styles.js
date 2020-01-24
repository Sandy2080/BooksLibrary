import styled from "styled-components";

export const StyledContainer = styled.div`
    margin-top: ${props => props.margin}px !important;
    .row {
        .col {
            margin: 0 auto;
        }
    }
}
`