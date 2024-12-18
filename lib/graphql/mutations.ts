import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      payload
      refreshExpiresIn
      token
      refreshToken
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation CreateUser(
    $email: String!
    $firstName: String!
    $lastName: String
    $password: String!
    $userType: UserType!
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