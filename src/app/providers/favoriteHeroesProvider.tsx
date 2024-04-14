'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import FavoriteHeroesContext from '@/app/context/favoriteHeroesContext'
import FavoriteHero from '@/app/models/FavoriteHero'

interface LoadingProviderProps {
  children: ReactNode
}

export default function FavoriteHeroProvider({
  children,
}: LoadingProviderProps) {
  const SESSION_KEY = 'zaraMarvel';
  const [favorites, setFavorites] = useState<FavoriteHero[]>(() => {
    const sessionData = sessionStorage.getItem(SESSION_KEY);

    if (!sessionData) {
      return []
    }

    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData.favoriteHeroes;
  })

  useEffect(() => {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        favoriteHeroes: [...favorites],
      })
    )
  }, [favorites])

  return (
    <FavoriteHeroesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteHeroesContext.Provider>
  )
}
