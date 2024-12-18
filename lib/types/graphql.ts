export type Maybe<T> = T | null;

export enum USER_ROLE_ENUM {
  STUDENT = 'STUDENT',
  STAFF = 'STAFF',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName?: Maybe<string>;
  userType?: Maybe<USER_ROLE_ENUM>;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

export interface SignupMutationVariables {
  email: string;
  firstName: string;
  lastName?: Maybe<string>;
  password: string;
  userType: USER_ROLE_ENUM;
}

export interface LoginMutationResponse {
  tokenAuth?: Maybe<{
    token: string;
    refreshToken: string;
    payload: any;
    refreshExpiresIn: number;
  }>;
}

export interface SignupMutationResponse {
  createUser?: Maybe<{
    user?: Maybe<User>;
  }>;
}

export interface GetCurrentUserResponse {
  whoami?: Maybe<User>;
}