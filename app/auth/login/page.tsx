"use client";

import LoginForm from '@/components/auth/LoginForm';
import FormContainer from '@/components/auth/FormContainer';

export default function LoginPage() {
  return (
    <FormContainer title="Sign in to your account">
      <LoginForm />
    </FormContainer>
  );
}