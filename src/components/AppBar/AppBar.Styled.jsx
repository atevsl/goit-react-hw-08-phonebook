import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Header = styled.header`
   {
    font-size: 40px;
    text-decoration: none;
    justify-content: center;
  }
`;
export const Title = styled.h1`
   {
    display: flex;
    font-size: 40px;
    margin: 20px;
    justify-content: center;
  }
`;

export const NavLinkStyled = styled(NavLink)`
   {
    font-size: 40px;
    text-decoration: none;
    color: black;
    &:hover,
    &:focus {
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }
    &:active {
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }
  }
`;
export const NavLinkContainer = styled.nav`
   {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
