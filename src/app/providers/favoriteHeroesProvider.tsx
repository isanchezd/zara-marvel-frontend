'use client'

import React, { ReactNode, useEffect, useState } from 'react';
import FavoriteHeroesContext from '@/app/context/favoriteHeroesContext';
import FavoriteHero from '@/app/models/FavoriteHero';
import favoritesRepository from '../repositories/favoritesLocalStorageRepository';

interface LoadingProviderProps {
  children: ReactNode
}

export default function FavoriteHeroProvider({
  children,
}: LoadingProviderProps) {
  const [favorites, setFavorites] = useState<FavoriteHero[]>(() => favoritesRepository.getFavorites())

  useEffect(() => {
    favoritesRepository.setFavorites(favorites)
  }, [favorites])

  return (
    <FavoriteHeroesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteHeroesContext.Provider>
  )
}
