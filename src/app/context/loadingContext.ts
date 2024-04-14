import React, { createContext } from 'react';

interface LoadingContextType {
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export default LoadingContext;