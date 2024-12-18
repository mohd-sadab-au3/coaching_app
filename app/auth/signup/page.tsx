"use client";

import SignupForm from '@/components/auth/SignupForm';
import FormContainer from '@/components/auth/FormContainer';

export default function SignupPage() {
  return (
    <FormContainer title="Create your account">
      <SignupForm />
    </FormContainer>
  );
}