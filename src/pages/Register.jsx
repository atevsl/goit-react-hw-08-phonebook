import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from 'components/ContactForm/ContactForm.Styled';

export const Register = () => {
  return (
    <FormStyled>
      <LabelStyled htmlFor="name">
        <span>Name:</span>
        <InputStyled
          type="text"
          name="name"
          // value={name}
          // onChange={onNameChange}
        />
      </LabelStyled>
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
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
};
