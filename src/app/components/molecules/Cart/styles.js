import styled from "styled-components";

export const StyledCartRow = styled.div`
  display: flex;
  .half-block {
     width: 100%;
     display: flex;
     justify-content: space-between;
     margin-bottom: 20px;
     div {
       margin-right: 10px;
     }
  }
  .first-half {
    width: 60%;
    p {
      margin-bottom: 0;
    }
  }
  .second-half {
    width: 40%;
  }
  .input {
    margin-left: 40px;
  }
  @media screen and (max-width: 640px) {
    display:block;
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
    @media screen and (max-width: 640px) {
    .footer {
      display: block;
      text-align: center;
    }
  }
`;

export const StyledRow = styled.div`
  padding-right: 20px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  li {
    list-style-type: none;
  }
`;


export const HalfBlock = styled.div`
  width: 50%
`
