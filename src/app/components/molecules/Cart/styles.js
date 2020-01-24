import styled from "styled-components";

export const StyledCartRow = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  li {
    list-style-type: none;
  }
`;
export const StyledCart = styled.div`
  display: flex;
  .stepper-input {
    width: 40%;
    margin: 0 auto;
  }
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
    margin: 20px 20px 0 0;
    div:first-child {
        margin-right: 20px!important;
        p {
          font-size: 12px;
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
      spadding: 5px 15px;
      div {
        margin-bottom: 16px;
      }
      p {
        margin-bottom: 16px;
      }
    }
    a, button {
      display: inline-table;
    }
    a.btn-info {
      vertical-align: bottom;
    }
    ul:first-child {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-left: 0;
    }
    @media screen and (max-width: 768px) {
    .footer {
      display: block;
      text-align: center;
    }
  }
`;

