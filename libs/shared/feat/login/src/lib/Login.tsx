import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import StyledInput from '../styled/StyledInput'; 
import InputBox from './inputbox/InputBox';
import PasswordInput from './passwordinput/PasswordInput';
import styled from '@emotion/styled';
import LoginButton from './button/LoginButton';

export interface LoginProps {
  callbackUrl?: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2rem auto;
  background-color: #fff;`

const Login: React.FC<LoginProps> = ({ callbackUrl = '/' }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      await signIn('credentials', {
        username: username.toLowerCase(),
        password,
        redirect: true,
        callbackUrl,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
      <StyledInput
        component={InputBox}
        label="Benutzername"
        name="username"
        // control={control}
      />
      <br />
      <StyledInput
        component={PasswordInput}
        label="Password"
        name="password"
        // control={control}
      />
      <LoginButton
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        login
      </LoginButton>
    </StyledForm>
  );
};

export default Login;
