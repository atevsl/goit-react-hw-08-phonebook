import { useSelector } from 'react-redux';
import { getUsername } from 'redux/store';
import { LogOutBtn, Mail, UserMenuWrap } from './UserMenu.Styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/features/authSlice';
import { Navigate } from 'react-router-dom';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const onLogoutHendler = () => {
    dispatch(logOut());
    // <Navigate to={'login'} />;
  };
  return (
    <UserMenuWrap>
      <Mail>{name}</Mail>
      <LogOutBtn onClick={onLogoutHendler}>Logout</LogOutBtn>
    </UserMenuWrap>
  );
};
