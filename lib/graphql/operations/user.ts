import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUserDetails {
    whoami {
      id
      email
      firstName
      lastName
      userType
    }
  }
`;