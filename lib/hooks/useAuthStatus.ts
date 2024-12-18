"use client";

import { useState, useEffect } from 'react';
import { getAuthToken, isTokenExpired } from '../utils/auth';

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    setIsAuthenticated(!!token && !isTokenExpired());
    setIsLoading(false);
  }, []);

  return {
    isAuthenticated,
    isLoading,
  };
};