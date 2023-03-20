import { useSelector } from 'react-redux';
import { getUsername } from 'redux/store';
import { LogOutBtn, Mail, UserMenuWrap } from './UserMenu.Styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authSlice';
import { LogoutOutlined } from '@ant-design/icons';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <UserMenuWrap>
      <Mail>Welcome, {name}</Mail>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        <LogoutOutlined />
        Logout
      </LogOutBtn>
    </UserMenuWrap>
  );
};
