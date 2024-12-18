"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../graphql/mutations/auth';
import { LoginMutationVariables, SignupMutationVariables, LoginMutationResponse, SignupMutationResponse } from '../types/graphql';
import { setAuthToken, clearAuthToken } from '../utils/auth';
import { AUTH_ROUTES } from '../constants/auth';

export const useAuth = () => {
  const router = useRouter();
  
  const [loginMutation] = useMutation<LoginMutationResponse, LoginMutationVariables>(
    LOGIN_MUTATION
  );
  
  const [signupMutation] = useMutation<SignupMutationResponse, SignupMutationVariables>(
    SIGNUP_MUTATION
  );

  const handleLogin = useCallback(async (variables: LoginMutationVariables) => {
    try {
      const { data } = await loginMutation({ variables });
      
      if (data?.tokenAuth) {
        setAuthToken(data.tokenAuth);
        message.success('Login successful!');
        router.push(AUTH_ROUTES.DASHBOARD);
        return true;
      }
      return false;
    } catch (error) {
      message.error('Login failed. Please check your credentials.');
      return false;
    }
  }, [loginMutation, router]);

  const handleGoogleLogin = useCallback(async () => {
    try {
      // Implement Google login logic here
      message.info('Google login will be implemented soon');
    } catch (error) {
      message.error('Google login failed. Please try again.');
    }
  }, []);

  const handleSignup = useCallback(async (variables: SignupMutationVariables) => {
    try {
      const { data } = await signupMutation({ variables });
      
      if (data?.createUser?.user) {
        message.success('Account created successfully!');
        router.push(AUTH_ROUTES.LOGIN);
        return true;
      }
      return false;
    } catch (error) {
      message.error('Signup failed. Please try again.');
      return false;
    }
  }, [signupMutation, router]);

  const handleLogout = useCallback(() => {
    clearAuthToken();
    router.push(AUTH_ROUTES.LOGIN);
  }, [router]);

  return {
    handleLogin,
    handleSignup,
    handleLogout,
    handleGoogleLogin,
  };
};