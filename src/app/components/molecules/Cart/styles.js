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
    justify-content: space-evenly;
    flex-direction: row;
    margin: 20px auto;
    .stepper-input {
      width: 60%; 
    }
    .stepper-buttons { 
      width: 100%;
    }
    &.second-half { 
      p {
        width: 100%;
        text-align: center;
      }
    }
    @media screen and (min-width: 1024px) {
    &.first-half {
      margin-right: 40px!important; 
    }
    &.second-half {
      .stepper-input {
         margin: 0 0 0 80px;
      }
      .stepper-buttons {
        width: 60%;
        display: inline-block;
        margin: 0 auto;
        text-align: center;
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