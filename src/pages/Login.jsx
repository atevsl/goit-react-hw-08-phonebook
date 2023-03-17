import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from 'components/ContactForm/ContactForm.Styled';
export const Login = () => {
  return (
    <FormStyled>
      <LabelStyled htmlFor="email">
        <span>Email:</span>
        <InputStyled
          type="email"
          name="email"
          // value={number}
          // onChange={onNumberChange}
        ></InputStyled>
      </LabelStyled>
      <LabelStyled htmlFor="password">
        <span>Password:</span>
        <InputStyled
          type="password"
          name="password"
          // value={number}
          // onChange={onNumberChange}
        ></InputStyled>
      </LabelStyled>
      <ButtonStyled type="submit">Login</ButtonStyled>
    </FormStyled>
  );
};
