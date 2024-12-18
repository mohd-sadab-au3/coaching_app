import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      refreshToken
      payload
      refreshExpiresIn
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup(
    $email: String!
    $firstName: String!
    $lastName: String
    $password: String!
    $userType: USER_ROLE_ENUM!
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      userType: $userType
    ) {
      user {
        id
        email
        firstName
        lastName
        userType
      }
    }
  }
`;