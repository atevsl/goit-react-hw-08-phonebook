import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/store';

import { AuthNav } from '../AuthNav/AuthNav';
import {
  Header,
  NavLinkContainer,
  NavLinkStyled,
  Title,
} from './AppBar.Styled';

export const AppBar = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <Header>
      <Title>Phonebook</Title>
      <NavLinkContainer>
        <div>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          {isLogged && (
            <NavLinkStyled style={{ marginLeft: '50px' }} to="/contacts">
              Contacts
            </NavLinkStyled>
          )}
        </div>

        {isLogged ? <UserMenu /> : <AuthNav />}
      </NavLinkContainer>
    </Header>
  );
};
