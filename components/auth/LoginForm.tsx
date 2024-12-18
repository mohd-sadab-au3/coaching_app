"use client";

import { useState } from 'react';
import { Form, Input, Button, Divider } from 'antd';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Chrome } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { LoginInput } from '@/lib/types/auth';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { handleLogin, handleGoogleLogin } = useAuth();

  const onSubmit = async (values: LoginInput) => {
    setLoading(true);
    await handleLogin(values);
    setLoading(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
          <Chrome className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
      </div>

      <Button
        icon={
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
        }
        onClick={handleGoogleLogin}
        className="w-full h-12 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 mb-6"
      >
        Continue with Google
      </Button>

      <Divider className="my-6">or continue with email</Divider>

      <Form
        name="login"
        onFinish={onSubmit}
        layout="vertical"
        className="space-y-4"
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input 
            size="large" 
            className="rounded-lg"
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            size="large" 
            className="rounded-lg"
            placeholder="Enter your password"
          />
        </Form.Item>

        <div className="flex items-center justify-between mb-4">
          <Link 
            href="/auth/forgot-password" 
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={loading}
          className="w-full h-12 rounded-lg text-base font-medium"
        >
          Sign in
        </Button>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800 font-medium">
            Sign up
          </Link>
        </p>
      </Form>
    </motion.div>
  );
}