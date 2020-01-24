import styled from "styled-components";

export const StyledCartRow = styled.div`
  padding-right: 20px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  li {
    list-style-type: none;
  }
`;
export const StyledCart = styled.div`
  display: flex;
  .input {
    margin-left: 40px;
  }
  .trash-button {
    display: inline;
  }
  @media screen and (max-width: 640px) {
    display:block;
  }
`
export const StyledHalfBlock = styled.div`
width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 20px 0 0;
   
 .first-half {
    width: 60%;
    p {
      margin-bottom: 0;
    }
  }
  .second-half {
    width: 40%;
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

