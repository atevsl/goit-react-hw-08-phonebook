import { NavLinkStyled } from 'components/AppBar/AppBar.Styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/register" style={{ marginRight: '50px' }}>
        Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </div>
  );
};
