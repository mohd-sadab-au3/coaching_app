import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    whoami {
      id
      email
      firstName
      lastName
      userType
    }
  }
`;