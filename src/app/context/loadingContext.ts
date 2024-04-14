import React, { createContext } from 'react';

interface LoadingContext {
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
};

const LoadingContext = createContext<LoadingContext | undefined>(undefined);

export default LoadingContext;