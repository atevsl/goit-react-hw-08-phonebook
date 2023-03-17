import { LogOutBtn, Mail, UserMenuWrap } from './UserMenu.Styled';

export const UserMenu = () => {
  return (
    <UserMenuWrap>
      <Mail>mango@mail.com</Mail>
      <LogOutBtn>Logout</LogOutBtn>
    </UserMenuWrap>
  );
};
