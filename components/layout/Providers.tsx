"use client";

import React from "react";
import dynamic from "next/dynamic";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { TypingContextProvider } from "@/contexts/TypingContext";
const LanguageProvider = dynamic(
  () => import("../../contexts/LanguageContext"),
  { ssr: false },
);

// Tanstack Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // TODO: Rethink
    },
  },
});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <TypingContextProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </TypingContextProvider>
    </QueryClientProvider>
  );
}

export default Providers;
