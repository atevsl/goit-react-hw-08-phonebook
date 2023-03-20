import { LoginOutlined } from '@ant-design/icons/lib/icons';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from 'components/ContactForm/ContactForm.Styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submitHendler = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormStyled onSubmit={submitHendler}>
      <LabelStyled htmlFor="name">
        <span>Name:</span>
        <InputStyled
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </LabelStyled>
      <LabelStyled htmlFor="email">
        <span>Email:</span>
        <InputStyled
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        ></InputStyled>
      </LabelStyled>
      <LabelStyled htmlFor="password">
        <span>Password:</span>
        <InputStyled
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></InputStyled>
      </LabelStyled>
      <ButtonStyled type="submit">
        <LoginOutlined />
        Register
      </ButtonStyled>
    </FormStyled>
  );
};
export default Register;
