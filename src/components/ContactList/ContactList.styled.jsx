import styled from 'styled-components';
export const ListStyled = styled.ul`
   {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    ::-webkit-scrollbar {
      width: 25px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-image: linear-gradient(black, white, black);
    }
    ::-webkit-scrollbar-track:hover {
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const ListItemStyled = styled.li`
   {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 2px;
  }
`;
export const ContactTextStyled = styled.p`
   {
    font-size: 20px;
    margin: 0;
    margin-right: 20px;
  }
`;

export const ContactListBtn = styled.button`
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
