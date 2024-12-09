import React, { createContext, useState, useContext, ReactNode } from "react";

// Define context and a provider for loading state
interface LoadingContextProps {
  loading: boolean;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined,
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ loading: isLoading, isLoading, setIsLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use loading context
export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useLoading must be used within a LoadingProvider. Wrap your application with <LoadingProvider>.",
    );
  }
  return context;
};
