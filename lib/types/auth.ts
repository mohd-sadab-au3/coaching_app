import { USER_ROLE_ENUM } from './graphql';

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
  userType: USER_ROLE_ENUM;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  payload: any;
  refreshExpiresIn: number;
}