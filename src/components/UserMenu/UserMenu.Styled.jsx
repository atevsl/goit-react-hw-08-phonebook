import styled from 'styled-components';

export const UserMenuWrap = styled.div`
   {
    display: flex;
    align-items: center;
  }
`;

export const Mail = styled.p`
   {
     {
      font-family: 'Merienda', cursive;
      cursor: pointer;
      padding: 2px 8px;
      margin: 0;
      font-size: 20px;
      color: black;
      &:hover {
        color: white;
      }
    }
  }
`;
export const LogOutBtn = styled.button`
   {
     {
      font-family: 'Merienda', cursive;
      cursor: pointer;
      padding: 2px 8px;
      background-color: white;
      border-radius: 10px;
      font-size: 20px;
      color: black;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
