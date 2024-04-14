'use client'

import React, { ReactNode, useState } from 'react'
import LoadingContext from '@/app/context/loadingContext'

interface LoadingProviderProps {
  children: ReactNode
}

export default function IsLoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return <LoadingContext.Provider value={{isLoading, setIsLoading}}>{children}</LoadingContext.Provider>
}
