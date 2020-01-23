import styled from "styled-components";

export const StyledCartRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  .half-block {
     width: 100%;
     display: flex;
     justify-content: space-evenly;
     margin-bottom: 20px;
     div {
       margin-right: 10px;
     }
  }
  @media screen and (max-width: 640px) {
    display:block;
    .half-block {
       justify-content: space-between;
    }
  }
`
export const StyledFooter = styled.div`
    padding: 0 20px;

    .footer {
      display: flex;
      justify-content: space-between;
      spadding: 5px 15px;
    }
    a {
      display: inline-table;
    }
    a.btn-info {
      vertical-align: bottom;
    }
    ul: first-child {
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
