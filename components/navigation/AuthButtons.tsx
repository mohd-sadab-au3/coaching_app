"use client";

import { useRouter } from 'next/navigation';
import { Button, Space } from 'antd';
import { useAuth } from '@/lib/hooks/useAuth';
import { useAuthStatus } from '@/lib/hooks/useAuthStatus';
import { AUTH_ROUTES } from '@/lib/constants/auth';

export default function AuthButtons() {
  const router = useRouter();
  const { handleLogout } = useAuth();
  const { isAuthenticated, isLoading } = useAuthStatus();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return (
      <Button 
        type="primary" 
        onClick={handleLogout}
        block
        className="md:w-auto"
      >
        Logout
      </Button>
    );
  }

  return (
    <Space direction="vertical" className="w-full md:w-auto md:flex-row">
      <Button 
        onClick={() => router.push(AUTH_ROUTES.LOGIN)}
        block
        className="md:w-auto"
      >
        Login
      </Button>
      <Button 
        type="primary" 
        onClick={() => router.push(AUTH_ROUTES.SIGNUP)}
        block
        className="md:w-auto"
      >
        Sign Up
      </Button>
    </Space>
  );
}