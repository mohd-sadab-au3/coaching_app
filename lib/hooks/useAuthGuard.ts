"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isTokenExpired, getAuthToken } from '../utils/auth';

export const useAuthGuard = (redirectTo: string = '/auth/login') => {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (!token || isTokenExpired()) {
      router.push(redirectTo);
    }
  }, [redirectTo, router]);
};