import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLogged } from 'redux/store';
import { Header, NavLinkContainer, NavLinkStyled, Title } from './Pages.Styled';

export const AppBar = () => {
  const isLogged = useSelector(getIsLogged);
  console.log('isLogged in appBar', isLogged);
  return (
    <Header>
      <Title>Phonebook</Title>
      <NavLinkContainer>
        {isLogged === false ? (
          <>
            <NavLinkStyled to="register">Register</NavLinkStyled>
            <NavLinkStyled to="login">Login</NavLinkStyled>
          </>
        ) : (
          <NavLinkStyled to="contacts">
            Contacts
            <UserMenu />
          </NavLinkStyled>
        )}
      </NavLinkContainer>

      <Outlet />
    </Header>
  );
};
{
}
