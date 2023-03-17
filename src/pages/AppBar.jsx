import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkContainer, NavLinkStyled, Title } from './Pages.Styled';

export const AppBar = () => {
  return (
    <Header>
      <Title>Phonebook</Title>
      <NavLinkContainer>
        <NavLinkStyled to="register">Register</NavLinkStyled>
        <NavLinkStyled to="login">Login</NavLinkStyled>
        <NavLinkStyled to="contacts">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <UserMenu />
            Contacts
          </div>
        </NavLinkStyled>
      </NavLinkContainer>

      <Outlet />
    </Header>
  );
};
{
  /* <NavLink
  to="/"
  className={({ isActive }) => (isActive ? css.navActive : css.nav)}
>
  Home
</NavLink>; */
}
