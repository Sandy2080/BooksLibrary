import styled from 'styled-components';

export const StyledShoppingBag = styled.div`
  position: relative;
  a {
    color: #333;
  }
  .badge {
    position: absolute;
    top: 10px;
    left: -5px;
    font-size: 15px;
  }
  @media screen and (max-width: 640px) {
    .badge {
      position: relative;
      margin-bottom: -10px;
    }
  }
`;
