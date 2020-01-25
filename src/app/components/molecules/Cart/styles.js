import styled from "styled-components";

export const StyledCartRow = styled.div`
  ul { 
    text-align: right; 
    display: flex; 
    justify-content: flex-end; 
    li {
      list-style-type: none;
    }
  }
`;
export const StyledCart = styled.div`
  display: flex;
  
  .trash-button {
    display: inline;
  }
  @media screen and (max-width: 768px) {
    display:block;
    .stepper-input {
      margin: 0;
    }
  }
`
export const StyledHalfBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px auto;
    &.first-half {
      margin-right: 20px!important; 
    }
    &.second-half {
      div: first-child {
        margin: 0 auto
      }
      p {
        width: 100%;
        text-align: center;
      }
      .stepper-input {
        width: 60%;
        margin: 0 0 0 80px;
      }
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
`
export const StyledFooter = styled.div`
    padding: 0 20px;
    .footer {
      display: flex;
      justify-content: space-between;
      padding: 5px 15px;
      div, p {
        margin-bottom: 16px;
      }
    }
    ul {
      list-style-type: none;
      padding: 0;
      &:first-child {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
       li {
         margin-left: 0;
       }
    }
  }
`;
export const StyledCartButtons = styled.div` 
display: flex; justify-content: 
space-between; 
padding-bottom: 20px;
 a, button {
      display: inline-table;
      .btn-info {
        vertical-align: bottom;
      }
  }
`
