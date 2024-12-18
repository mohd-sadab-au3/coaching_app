import { getItem, setItem, removeItem } from './storage';
import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY, TOKEN_EXPIRY_KEY, USER_TYPE_KEY } from '../constants/auth';
import { AuthResponse } from '../types/auth';

export const setAuthToken = (authData: AuthResponse): void => {
  setItem(AUTH_TOKEN_KEY, authData.token);
  setItem(REFRESH_TOKEN_KEY, authData.refreshToken);
  setItem(TOKEN_EXPIRY_KEY, authData.payload.exp.toString());
  setItem(USER_TYPE_KEY, authData.payload.userType);
};

export const clearAuthToken = (): void => {
  removeItem(AUTH_TOKEN_KEY);
  removeItem(REFRESH_TOKEN_KEY);
  removeItem(TOKEN_EXPIRY_KEY);
  removeItem(USER_TYPE_KEY);
};

export const isTokenExpired = (): boolean => {
  const expiry = getItem(TOKEN_EXPIRY_KEY);
  if (!expiry) return true;
  
  const expiryTime = parseInt(expiry) * 1000;
  return Date.now() >= expiryTime;
};

export const getAuthToken = (): string | null => {
  return getItem(AUTH_TOKEN_KEY);
};