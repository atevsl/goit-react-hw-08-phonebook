import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogged } from 'redux/store';
import { Header, Title } from '../pages/Pages.Styled';
import { AuthNav } from './AuthNav/AuthNav';

export const AppBar = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <Header>
      <Title>Phonebook</Title>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isLogged ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
