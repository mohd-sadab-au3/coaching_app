"use client";

import { ReduxProvider } from './ReduxProvider';
import { ApolloProvider } from './ApolloProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ApolloProvider>
        {children}
      </ApolloProvider>
    </ReduxProvider>
  );
}