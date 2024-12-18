"use client";

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries/user';
import { GetCurrentUserResponse, User } from '../types/graphql';

export const useUser = () => {
  const { data, loading, error, refetch } = useQuery<GetCurrentUserResponse>(
    GET_CURRENT_USER,
    {
      fetchPolicy: 'network-only',
    }
  );

  return {
    user: data?.whoami,
    isLoading: loading,
    error,
    refetch,
  };
};